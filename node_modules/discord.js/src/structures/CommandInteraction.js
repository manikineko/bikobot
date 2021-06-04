'use strict';

const Interaction = require('./Interaction');
const InteractionResponses = require('./interfaces/InteractionResponses');
const WebhookClient = require('../client/WebhookClient');
const { ApplicationCommandOptionTypes } = require('../util/Constants');

/**
 * Represents a command interaction.
 * @extends {Interaction}
 * @implements {InteractionResponses}
 */
class CommandInteraction extends Interaction {
  constructor(client, data) {
    super(client, data);

    /**
     * The ID of the invoked application command
     * @type {Snowflake}
     */
    this.commandID = data.data.id;

    /**
     * The name of the invoked application command
     * @type {string}
     */
    this.commandName = data.data.name;

    /**
     * Whether the reply to this interaction has been deferred
     * @type {boolean}
     */
    this.deferred = false;

    /**
     * The options passed to the command.
     * @type {CommandInteractionOption[]}
     */
    this.options = data.data.options?.map(o => this.transformOption(o, data.data.resolved)) ?? [];

    /**
     * Whether this interaction has already been replied to
     * @type {boolean}
     */
    this.replied = false;

    /**
     * An associated webhook client, can be used to create deferred replies
     * @type {WebhookClient}
     */
    this.webhook = new WebhookClient(this.applicationID, this.token, this.client.options);
  }

  /**
   * The invoked application command, if it was fetched before
   * @type {?ApplicationCommand}
   */
  get command() {
    const id = this.commandID;
    return this.guild?.commands.cache.get(id) ?? this.client.application.commands.cache.get(id) ?? null;
  }

  /**
   * Represents an option of a received command interaction.
   * @typedef {Object} CommandInteractionOption
   * @property {string} name The name of the option
   * @property {ApplicationCommandOptionType} type The type of the option
   * @property {string|number|boolean} [value] The value of the option
   * @property {CommandInteractionOption[]} [options] Additional options if this option is a subcommand (group)
   * @property {User} [user] The resolved user
   * @property {GuildMember|Object} [member] The resolved member
   * @property {GuildChannel|Object} [channel] The resolved channel
   * @property {Role|Object} [role] The resolved role
   */

  /**
   * Transforms an option received from the API.
   * @param {Object} option The received option
   * @param {Object} resolved The resolved interaction data
   * @returns {CommandInteractionOption}
   * @private
   */
  transformOption(option, resolved) {
    const result = {
      name: option.name,
      type: ApplicationCommandOptionTypes[option.type],
    };

    if ('value' in option) result.value = option.value;
    if ('options' in option) result.options = option.options.map(o => this.transformOption(o, resolved));

    const user = resolved?.users?.[option.value];
    if (user) result.user = this.client.users.add(user);

    const member = resolved?.members?.[option.value];
    if (member) result.member = this.guild?.members.add({ user, ...member }) ?? member;

    const channel = resolved?.channels?.[option.value];
    if (channel) result.channel = this.client.channels.add(channel, this.guild) ?? channel;

    const role = resolved?.roles?.[option.value];
    if (role) result.role = this.guild?.roles.add(role) ?? role;

    return result;
  }

  // These are here only for documentation purposes - they are implemented by InteractionResponses
  /* eslint-disable no-empty-function */
  defer() {}
  reply() {}
  fetchReply() {}
  editReply() {}
  deleteReply() {}
  followUp() {}
}

InteractionResponses.applyToClass(CommandInteraction, ['deferUpdate', 'update']);

module.exports = CommandInteraction;

const { Events, ActivityType } = require("discord.js");
const startup = new Date();

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    const ready = new Date();
    const diff = ready.getTime() - startup.getTime();
    console.log(
      `${client.user.tag} is now running on 1.1 volts. Connected in ${diff}ms`
    );
    client.user.setActivity(`${client.guilds.cache.size} servers`, { type: ActivityType.Watching });
  },
};

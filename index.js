const { Plugin } = require("powercord/entities");

module.exports = class KiraiPCUtils extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: "members",
      description: "Gets all members",
      executor: (args) => {
        return {
          send: false,
          result: require('powercord/webpack').getModule(['getMembers'], false).getMembers(args[0]).map(f => `<@${f.userId}>`).join(""),
        };
      },
    });

    powercord.api.commands.registerCommand({
      command: "members-send",
      description: "Ping all members",
      executor: (args) => {
        return {
          send: true,
          result: require('powercord/webpack').getModule(['getMembers'], false).getMembers(args[0]).map(f => `<@${f.userId}>`).join("").substring(0, 2000),
        };
      },
    });
    
    powercord.api.commands.registerCommand({
      command: "space-send",
      description: "Sends a lot of empty space",
      executor: (args) => {
        return {
          send: true,
          result: "**" + "\n".repeat(1996) + "**",
        };
      },
    });
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("members");
    powercord.api.commands.unregisterCommand("members-send");
  }
};

module.exports = {
  name: "ping",
  description: "get the bots ping and uptime",
  usage: "ping",
  category: "Fun",
  sourcecode: "https://github.com/Kiko-Labs/Kiko-San/blob/stable/src/Prefix%20Commands/Utility/ping.js",
  type: "messageCreate",
  code: `
      Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
    `,
};

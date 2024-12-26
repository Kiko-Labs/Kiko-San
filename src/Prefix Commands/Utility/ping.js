module.exports = {
  name: "ping",
  description: "get the bots ping and uptime",
  usage: "ping",
  type: "messageCreate",
  code: `
      Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
    `,
};
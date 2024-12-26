module.exports = {
  name: "update",
  aliases: ["up"],
  description: "updates the bot and registers new commands and updates current ones",
  sourcecode: "https://github.com/Kiko-Labs/Kiko-San/blob/stable/src/Prefix%20Commands/Developer/eval.js",
  usage: "update",
  type: "messageCreate",
  code: `
    $onlyForBotOwner[true]
    $updateCommands
    $updateApplicationCommands
    $start
    $description[Updated The Bot!]
    $title[Your welcome!]
    `,
};

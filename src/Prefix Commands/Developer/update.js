module.exports = {
    name: "update",
    aliases: ["up"],
    description: "updates the bot and registers new commands and updates current ones",
    usage: "update",
    type: "messageCreate",
    code: `
    $onlyForBotOwner[true]
    $updateCommands
    $updateApplicationCommands
    $start
    $description[Updated The Bot!]
    $title[Your welcome!]
    `
}
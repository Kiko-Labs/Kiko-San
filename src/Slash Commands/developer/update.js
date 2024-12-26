module.exports = {
  code: `
    $onlyForBotOwner[true]
    $updateCommands
    $updateApplicationCommands
    $ephemeral
    $start
    $description[Updated The Bot!]
    $title[Your welcome!]
  `,
  data: {
    name: "update",
    description: "updates the bot and registers new commands and updates current ones",
  },
};

module.exports = {
  //---> Main code
  code: `$c[---> Limiters]
    $onlyForBotOwner[true]
    $updateCommands
    $updateApplicationCommands
    $ephemeral
    $start
    $description[Updated The Bot!]
    $title[Your welcome!]
  `,
  //---> Data of the slash command
  data: {
    name: "update",
    description: "updates the bot and registers new commands and updates current ones",
  },
};

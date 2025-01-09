module.exports = {
  //---> Main code
  code: `$c[---> Limiters]
    $onlyForBotOwner[true]` +
    /*---> The code behind the scene */ `
    $updateCommands
    $updateApplicationCommands
    $ephemeral`
    /*---> Custom functions*/ `
    $start` +
    /*---> Output embed */ `
    $description[Updated The Bot!]
    $title[Your welcome!]
  `,
  //---> Data of the slash command
  data: {
    name: "update",
    description: "updates the bot and registers new commands and updates current ones",
  },
}

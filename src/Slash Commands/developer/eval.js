module.exports = {
  /*---> Code */
  code: `
  $c[---> Limiters]
  $onlyForBotOwner[true]` +
  /*---> Execute the command*/ `
  $eval[$option[code]]` +
  /*--->Just a way to tell that the command was executed successfully in case there are no response*/ ` 
  Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
  `,
  //---> Data of the slash command
  data: {
    name: "eval",
    description: "runs the given code",
    options: [
      {
        type: 3,
        name: "code",
        description: "the code to run",
        required: true
      },
    ],
  },
}

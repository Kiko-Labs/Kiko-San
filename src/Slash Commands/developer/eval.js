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
    name: "eval", //---> Name
    description: "runs the given code", //---> Description of the command
    options: [ //---> Options
      {
        type: 3, //---> Input type
        name: "code", //---> Name of the option
        description: "the code to run", //---> The description of the option
        required: true //---> Is required?
      },
    ],
  },
};

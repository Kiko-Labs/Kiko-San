module.exports = {
  code: `$c[---> Limiter]
  $onlyForBotOwner[true]
  $c[--->Execute the command]
  $eval[$option[code]]
  $c[--->Just a way to tell that the command was executed successfully in case there are no response]
  Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
  `,
  data: {
    name: "eval", // name of the command
    description: "runs the given code", // description of the command
    options: [ // options
      {
        type: 3, // text input type
        name: "code", // name of the option
        description: "the code to run", // the description of the option
        required: true // is required?
      },
    ],
  },
};

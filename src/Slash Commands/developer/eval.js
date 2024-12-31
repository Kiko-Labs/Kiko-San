module.exports = {
  code: `
        $onlyForBotOwner[true]
        $eval[$option[code]]
        Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
      `,
  data: {
    name: "eval",
    description: "runs the given code",
    options: [
      {
        type: 3,
        name: "code",
        description: "the code to run",
        required: true,
        choices: [],
      },
    ],
  },
};

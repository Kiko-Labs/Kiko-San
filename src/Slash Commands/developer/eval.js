module.exports = {
  code: `
        $onlyForBotOwner[true]
        Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
        $eval[$option[code]]`,
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

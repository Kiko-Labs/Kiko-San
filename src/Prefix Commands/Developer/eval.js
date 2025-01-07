module.exports = {
  name: "eval",
  description: "runs the given code",
  usage: "<code>",
  category: "developer",
  type: "messageCreate",
  code: `
    $onlyForBotOwner[false]
    $onlyIf[$message!=;
        $start
        $title[Invalid Usage]
        $description[Give me the code bro... don't be shy]
        $footer[smh]
    ]
    Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
    $eval[$message]
  `,
};

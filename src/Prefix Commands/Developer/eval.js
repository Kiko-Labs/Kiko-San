module.exports = {
  name: "eval",
  description: "runs the given code",
  usage: "eval <code>",
  type: "messageCreate",
  code: `
        $onlyForBotOwner[false]
        $onlyIf[$message!=;
            $start
            $title[Invalid Usage]
            $description[Give me the code bro... don't be shy]
            $footer[smh]
        ]
        $eval[$message]
        **__Ping:__**$parseMs[$ping] **__Uptime:__**$parseMs[$uptime] `,
};

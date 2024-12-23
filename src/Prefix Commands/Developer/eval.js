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
            $description[Give me the code bro... dont be shy]
            $footer[smh]
        ]
        $eval[$message]
        $start
        $description[Ran the code!]
        $deleteIn[10s]
        $wait[10s]
        $deleteCommand`
}
module.exports = {
  name: "owoify",
  aliases: ["uwuify", "owo", "uwu"],
  description: "owoify a message",
  usage: "owoify <owo/uwu/uvu> <text>",
  category: "Fun",
  type: "messageCreate",
  code: `
    $c[================= LIMITER START ===================]

    $onlyIf[$message[0]!=;
      $start
      $title[Invalid Usage]
      $description[Correct Usage:
        owoify <owo/uwu/uvu> <text>
        owo: Owo is the normal amount of weird
        uwu: Uwu is a bit more weird than owo
        uvu: This is so weird that you will scream,beg for mercy]
    ]

    $onlyIf[$or[$message[0]==owo;$message[0]==uwu;$message[0]==uvu]==true;
      $start
      $title[Invalid Usage]
      $description[Correct Usage:
        owoify <owo/uwu/uvu> <text>
        owo: Owo is the normal amount of weird
        uwu: Uwu is a bit more weird than owo
        uvu: This is so weird that you will scream,beg for mercy]
    ]

    $onlyIf[$message[1]!=;
      $start
      $title[Invalid Usage]
      $description[Correct Usage:
        owoify <owo/uwu/uvu> <text>
        owo: Owo is the normal amount of weird
        uwu: Uwu is a bit more weird than owo
        uvu: This is so weird that you will scream,beg for mercy]
    ]
    $c[================= LIMITER END =====================]
    $let[level;$message[0]]
    $let[message;$replace[$message;$get[level];;1]]
    $djsEval[require('owoify-js').default(ctx.getKeyword("message"), ctx.getKeyword("level"))]
  `,
};

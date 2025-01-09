module.exports = {
  //---> Main code
  code: `$c[---> Variables]
    $let[level;$option[intensity]]
    $let[message;$option[text]]
    $djsEval[require('owoify-js').default(ctx.getKeyword("message"), ctx.getKeyword("level"))]
  `,
  //---> Data of the slash commands
  data: {
    name: "owoify",
    description: "owoifys a message",
    options: [
      {
        type: 3,
        name: "intensity",
        description: "the intensity of the owoifier, owo lightest, uwu medium, uvu highest",
        required: true,
        choices: [
          {
            name: "light",
            value: "owo",
          },
          {
            name: "medium",
            value: "uwu",
          },
          {
            name: "high",
            value: "uvu",
          },
        ],
      },
      {
        type: 3,
        name: "text",
        description: "the text to owoify",
        required: true,
      },
    ],
  },
};

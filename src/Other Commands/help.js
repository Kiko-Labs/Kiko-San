module.exports = {
  type: "interactionCreate",
  code: `
    $c[===================== LIMITERS ======================]
    $onlyIf[$authorID==$get[OG];
      $ephemeral
      This Isn't Your Command!
    ]
  `,
};

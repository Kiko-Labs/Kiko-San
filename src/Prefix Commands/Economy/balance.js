module.exports = {
  name: "balance",
  aliases: ["bal", "bank"],
  usage: "[user]",
  description: "find the balance of another user or yourself",
  category: "economy",
  type: "messageCreate",
  code: `
    $start
    $ifx[
      $if[$message[0]==;
        $title[$username[$authorID]'s Balance]
        $description[
          💰 Cash: $getMemberVar[cash;$authorID]
          🏦 Bank: $getMemberVar[bank;$authorID]
        ]
        $footer[Total Balance: $math[$getMemberVar[cash;$authorID]+$getMemberVar[bank;$authorID]]
        ]
      ]
    ]
  `,
};

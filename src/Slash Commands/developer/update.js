module.exports = {
  code: `
    $onlyForBotOwner[true]

    $let[count;$commandCount]
    $updateCommands
    $updateApplicationCommands
    $let[add;$sub[$commandCount;$get[count]]]

    $color[ff47ff]
    $description[Successfully update all commands.]

    $addActionRow
    $addButton[1;Added: $get[add];Success;✔️]
    $addButton[2;Total: $commandCount;Secondary;📃]
  `,
  data: {
    name: "update",
    description: "updates the bot and registers new commands and updates current ones",
  },
};

module.exports = {
  name: "update",
  aliases: ["up"],
  description: "updates the bot and registers new commands and updates current ones",
  sourcecode: "https://github.com/Kiko-Labs/Kiko-San/blob/stable/src/Prefix%20Commands/Developer/eval.js",
  usage: "update",
  type: "messageCreate",
  code: `
      $onlyForBotOwner[false]

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
};

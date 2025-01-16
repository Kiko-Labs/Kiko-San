module.exports = {
  name: "coinflip",
  aliases: ["cf"],
  description: "Flip A Coin",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $start
    $let[number;$and[$randomNumber[1;100;false]>=38;$randomNumber[1;100;false]<89]]
    $let[result;$advancedReplace[$checkCondition[$get[number]==true];true;Heads;false;Tails]]

    $let[messageID;$sendMessage[$channelID;$title[🪙 Flipping Coin...];true]]
    $wait[2000]
    $!editMessage[$channelID;$get[messageID];$title[You got...]
    $description[**$get[result]**]
    $start
    $addActionRow
    $addButton[coinflipretrybutton_$authorID;Retry;Secondary;🕹️]
    ]
  `,
};

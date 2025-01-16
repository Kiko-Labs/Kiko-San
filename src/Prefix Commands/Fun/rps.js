module.exports = {
  name: "rps",
  aliases: ["rock-paper-scissors", "rockpaperscissor", "rock-paper-scissor", "rockpaperscissors"],
  description: "play a game of rock paper scissors",
  usage: "rps [player]",
  category: "Fun",
  type: "messageCreate",
  code: `
    $onlyIf[$mentioned[0]!=;Please mention a opponent to play with.

    **Tip:** You can also play without any opponent by mentioning yourself.]
    $onlyIf[$isBot[$mentioned[0]]==false;You cannot play with bots!]

    $if[$mentioned[0]==$authorID;
    $title[RPS]
    $description[The game has been started. What are you going to choose against the bot?]
    $color[$getGlobalVar[embedcolor]]
    $addActionRow
    $addButton[rock_$authorID;Rock;Secondary;🌑;false]
    $addButton[paper_$authorID;Paper;Secondary;📰;false]
    $addButton[scissors_$authorID;Scissors;Secondary;✂️;false]

    ;
    $!djsEval[const { RockPaperScissors } = require('discord-gamecord');

    const Game = new RockPaperScissors({
      message: ctx.message,
      isSlashGame: false,
      opponent: ctx.message.mentions.users.first(),
      embed: {
        title: 'Rock Paper Scissors',
        color: '#ff694b',
        description: 'Press a button below to make a choice.'
      },
      buttons: {
        rock: 'Rock',
        paper: 'Paper',
        scissors: 'Scissors'
      },
      emojis: {
        rock: '🌑',
        paper: '📰',
        scissors: '✂️'
      },
      mentionUser: true,
      timeoutTime: 60000,
      buttonStyle: 'SECONDARY',
      pickMessage: 'You choose {emoji}.',
      winMessage: '**{player}** won the Game! Congratulations!',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
    });

    Game.startGame();
    ]
    ]
  `,
};

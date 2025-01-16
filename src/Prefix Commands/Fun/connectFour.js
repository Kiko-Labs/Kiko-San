module.exports = {
  name: "connect4",
  aliases: ["c4", "connectfour", "cfour"],
  description: "Play the Connect Four game in Discord!",
  usage: "<other player>",
  category: "Fun",
  type: "messageCreate",
  code: `
    $c[====================== LIMITERS ====================]
    $onlyIf[$mentioned[0]!=;
      Please Specify A User To Play With!
      $deleteIn[5s]
    ]
    $onlyIf[$isBot$mentioned[0]==false;
      You Cannot Play Connect Four With A Bot.
      $deleteIn[5s]
    ]
    $onlyIf[$mentioned[0]!=$authorID;
    You Cannot Play With Yourself.
    $deletIn[5s]
  ]
    $[==================== LIMITERS END ===================]
    $!djsEval[
      const { Connect4 } = require('discord-gamecord');
      const Game = new Connect4({
      message: ctx.message,
      isSlashGame: false,
      opponent: ctx.message.mentions.users.first(),
      embed: {
        title: 'Connect4 Game',
        statusTitle: 'Status',
        color: '#ff694b'
      },
      emojis: {
        board: '⚪',
        player1: '🔴',
        player2: '🟡'
      },
      mentionUser: true,
      timeoutTime: 60000,
      buttonStyle: 'SECONDARY',
      turnMessage: '{emoji} | Its turn of player **{player}**.',
      winMessage: '{emoji} | **{player}** won the Connect4 Game.',
      tieMessage: 'The Game tied! No one won the Game!',
      timeoutMessage: 'The Game went unfinished! No one won the Game!',
      playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
      });

      Game.startGame();
    ]
  `,
};

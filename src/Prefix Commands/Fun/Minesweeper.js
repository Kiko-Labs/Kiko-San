module.exports = {
  name: "minesweeper",
  aliases: ["ms"],
  description: "play a game of minesweeper",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $!djsEval[const { Minesweeper } = require('discord-gamecord');
    const Game = new Minesweeper({
      message: ctx.message,
      isSlashGame: false,
      embed: {
        title: 'Minesweeper',
        color: '#ff694b',
        description: 'Click on the buttons to reveal the blocks except mines.'
      },
      emojis: { flag: '🚩', mine: '💣' },
      mines: 5,
      timeoutTime: 60000,
      winMessage: 'You won the Game! You successfully avoided all the mines.',
      loseMessage: 'You lost the Game! Beaware of the mines next time.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    ]
`,
};

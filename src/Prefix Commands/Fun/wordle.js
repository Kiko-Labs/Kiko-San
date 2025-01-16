module.exports = {
  name: "wordle",
  description: "play a game of wordle",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $!djsEval[const { Wordle } = require('discord-gamecord');

    const Game = new Wordle({
      message: ctx.message,
      isSlashGame: false,
      embed: {
        title: 'Wordle',
        color: '#ff694b',
      },
      customWord: null,
      timeoutTime: 60000,
      winMessage: 'You won! The word was **{word}**.',
      loseMessage: 'You lost! The word was **{word}**.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    ]
  `,
};

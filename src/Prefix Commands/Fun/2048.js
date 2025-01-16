module.exports = {
  name: "2048",
  description: "Play the 2048 game in Discord!",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $djsEval[
      const { TwoZeroFourEight } = require('discord-gamecord');

      const Game = new TwoZeroFourEight({
        message: ctx.message,
        isSlashGame: false,
        embed: {
          title: '2048',
          overTitle: 'Game Over',
          color: '#ff694b'
        },
        emojis: {
          up: '⬆️',
          down: '⬇️',
          left: '⬅️',
          right: '➡️',
        },
        timeoutTime: 60000,
        buttonStyle: 'SECONDARY',
        playerOnlyMessage: 'Only {player} can use these buttons.'
      });

      Game.startGame();
    ]
  `,
};

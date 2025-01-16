module.exports = {
  name: "snake",
  description: "play a game of snake",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $!djsEval[const { Snake } = require('discord-gamecord');

    const Game = new Snake({
      message: ctx.message,
      isSlashGame: false,
      embed: {
        title: 'Snake Game',
        overTitle: 'Game Over',
        color: '#ff694b'
      },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️',
        down: '⬇️',
        left: '⬅️',
        right: '➡️',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢', skull: '💀'},
      foods: \\['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'\\],
      stopButton: 'Stop',
      timeoutTime: 60000,
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    ]
  `,
};

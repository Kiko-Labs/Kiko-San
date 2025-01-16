module.exports = {
  name: "findemoji",
  aliases: ["fe", "find-emoji"],
  description: "Find The Emoji",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $!djsEval[const { FindEmoji } = require('discord-gamecord');

    const Game = new FindEmoji({
      message: ctx.message,
      isSlashGame: false,
      embed: {
        title: 'Find Emoji',
        color: '#ff694b',
        description: 'Remember the emojis from the board below.',
        findDescription: 'Find the {emoji} emoji before the time runs out.'
      },
      timeoutTime: 60000,
      hideEmojiTime: 5000,
      buttonStyle: 'SECONDARY',
      emojis: \\['🍉', '🍇', '🍊', '🍋', '🥭', '🍎', '🍏', '🥝'\\],
      winMessage: 'You won! You selected the correct emoji. {emoji}',
      loseMessage: 'You lost! You selected the wrong emoji. {emoji}',
      timeoutMessage: 'You lost! You ran out of time. The emoji is {emoji}',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    ]
  `,
};

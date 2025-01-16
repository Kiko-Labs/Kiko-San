module.exports = {
  name: "matchpairs",
  aliases: ["mp", "match-pairs"],
  description: "start a game of match pairs",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $!djsEval[const { MatchPairs } = require('discord-gamecord');

    const Game = new MatchPairs({
      message: ctx.message,
      isSlashGame: false,
      embed: {
        title: 'Match Pairs',
        color: '#ff694b',
        description: '**Click on the buttons to match emojis with their pairs.**'
      },
      timeoutTime: 60000,
      emojis: \\['🍉', '🍇', '🍊', '🥭', '🍎', '🍏', '🥝', '🥥', '🍓', '🫐', '🍍', '🥕', '🥔'\\],
      winMessage: '**You won the Game! You turned a total of \`{tilesTurned}\` tiles.**',
      loseMessage: '**You lost the Game! You turned a total of \`{tilesTurned}\` tiles.**',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    ]
  `,
};

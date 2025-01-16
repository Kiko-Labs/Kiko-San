module.exports = {
  name: "guess-the-pokemon",
  aliases: ["gtp"],
  description: "Guess The Pokemon",
  usage: "",
  category: "Fun",
  type: "messageCreate",
  code: `
    $!djsEval[const { GuessThePokemon } = require('discord-gamecord');

    const Game = new GuessThePokemon({
      message: ctx.message,
      isSlashGame: false,
      embed: {
        title: "Who's The Pokemon",
        color: '#ff694b'
      },
      timeoutTime: 60000,
      winMessage: 'You guessed it right! It was a {pokemon}.',
      loseMessage: 'Better luck next time! It was a {pokemon}.',
      errMessage: 'Unable to fetch pokemon data! Please try again.',
      playerOnlyMessage: 'Only {player} can use these buttons.'
    });

    Game.startGame();
    ]
  `,
};

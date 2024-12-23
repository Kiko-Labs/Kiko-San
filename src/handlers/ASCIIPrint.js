const chalk = require('chalk');
const figlet = require('figlet');

const displayAsciiArt = () => {
  // Log that the bot is running
  console.log(chalk.hex('#ff80ff')('✨ Kiko San is Awakening ✨')); // Soft purple/pinkish text for a mystical vibe
  console.log();
  figlet.text("Kiko San", { font: "Poison" }, (err, data) => { // Try using the "Poison" font for anime vibe
    if (err) {
      console.error(chalk.red("Something went wrong with figlet..."));
      console.dir(err); // Log any errors with figlet to the console
      return;
    }

    // Output the formatted ASCII art in a colorized style that gives a soft anime aura
    console.log(chalk.hex('#ffb6c1')(data)); // Soft pinkish color for a subtle, gentle vibe
    console.log(""); // Add a blank line for spacing
  });
};

module.exports = displayAsciiArt; // Export the function

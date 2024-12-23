module.exports = {
    type: "ready",
    code: `
      $djsEval[
        const chalk = require('chalk'); // Import chalk
        // Pretty divider before logging the API key
        console.log(chalk.hex('#FF69B4').bold('═'.repeat(50))); // Pink divider
        
        // Log the TENOR API key with colors
        console.log(chalk.hex('#FF1493')('🔮 TENOR API Key: ') + chalk.hex('#8A2BE2')(process.env.TENOR_API_KEY));
        
        // Another divider after logging
        console.log(chalk.hex('#FF69B4').bold('═'.repeat(50))); // Pink divider
      ]
    `
  };
  
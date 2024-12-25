const { getNeofetch } = require("../../native/neofetch");

module.exports = {
  code: `
    $onlyForBotOwner[true]
    $start
    $title[System Specifications]
    $description[Here are your system stats senpai. uwu
        \`\`\`yml
        ${getNeofetch()}
        \`\`\`]
    $footer[I like men]
    `,
  data: {
    name: "neofetch",
    description: "get system stats",
  },
};

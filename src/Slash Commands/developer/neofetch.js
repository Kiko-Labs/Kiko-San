//---> Loading neofetch
const { getNeofetch } = require("../../native/neofetch");
//---> Main code
module.exports = {
  code: `$c[--->Limiters]
    $onlyForBotOwner[true]` +
    /*---> Custom functions */ `
    $start` +
    /*---> Main embed output*/ `
    $title[System Specifications]
    $description[Here are your system stats senpai. uwu
        \`\`\`yml
        ${getNeofetch()}
        \`\`\`]
    $footer[I like men]
    `,
  //---> Data of the slash command
  data: {
    name: "neofetch",
    description: "get system stats",
  },
};

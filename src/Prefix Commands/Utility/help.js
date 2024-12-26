module.exports = {
  name: "help",
  aliases: ["sos"],
  description: "Get Help On A Command",
  usage: "help",
  category: "Utility",
  source:
    "https://github.com/Kiko-Labs/Kiko-San/blob/stable/src/Prefix%20Commands/Utility/help.js",
  type: "messageCreate",
  code: `
    $start
    $let[OG;$authorID]
    $title[Help Has Arrived!]
    $description[Hello, I am Kiko San. All your server needs combined into one.
      **__Current Categories__:**

      • Roleplay
      • Utility
      • Fun
      • Developer (Can Only Be Used By Developer)

    ]
    $thumbnail[$userAvatar[$botID]]
    $image[$userBanner[$botID]]
    $footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]
    $addActionRow
    $addStringSelectMenu[helpSM-$authorID]
    $addOption[Roleplay;Get All Commands Related To Roleplay;RP]
    $addOption[Fun;Get All Commands That Are Fun;FUN]
    $addOption[Utility;Get All Utility Commands;UTIL]
    $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
    `,
};

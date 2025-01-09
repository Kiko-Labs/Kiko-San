module.exports = {
  name: "help",
  aliases: ["sos"],
  description: "get the bots help menu",
  usage: "",
  category: "Utility",
  type: "messageCreate",
  code: `
        $start
        $title[Help Has Arrived!]
        $description[Hello, I am $bn, your all-in-one server assistant!

          **__Argument Types:__**

          • **<argument>** means the argument is **required**.
          • **[argument\\]** means the argument is **optional**.

          **__Prefix Commands:__** $commandCount

          Need help with something specific? Select a category below to get a list of related commands!

        ]

        $thumbnail[$userAvatar[$botID]]
        $footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]
        $addActionRow
        $addStringSelectMenu[helpSM-$authorID]
        $addOption[Home;Return To The Help Menu Home;HOME;;true]
        $addOption[Roleplay;Get All Commands Related To Roleplay;RP]
        $addOption[Fun;Get All Commands That Are Fun;FUN]
        $addOption[Utility;Get All Utility Commands;UTIL]
        $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
        $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
        $addActionRow
        $addButton[$botInvite;Invite;Link]
        $addButton[https://kikosan.zack911.xyz;Website;Link]
        $addButton[https://discord.gg/VEKEfzdyqh;Server;Link]
    `,
};

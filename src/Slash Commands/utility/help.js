module.exports = {
  code: `
      $start
      $title[Help Has Arrived!]
      $description[Hello, I am $bn, your all-in-one server assistant!

        **__Argument Types:__**

        • **<argument>** means the argument is **required**.
        • **[argument\\]** means the argument is **optional**.

        **__Current Categories:__**

        • **Roleplay**: Commands related to roleplaying.
        ------------------------------------------------
        • **Utility**: Useful commands for managing and enhancing the server.
        ------------------------------------------------
        • **Fun**: Fun and entertaining commands for the community.
        ------------------------------------------------
        • **Developer**: Restricted commands, only available to select individuals.
        ---------------------------------------------

        **__Prefix Commands:__** $commandCount

        Need help with something specific? Select a category below to get a list of related commands!

        [Website\\](https://kikosan.zack911.xyz)
      ]

      $thumbnail[$userAvatar[$botID]]
      $image[$userBanner[$botID]]
      $footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]
      $addActionRow
      $addStringSelectMenu[helpSM-$authorID]
      $addOption[Home;Return To The Help Menu Home;HOME;;true]
      $addOption[Roleplay;Get All Commands Related To Roleplay;RP]
      $addOption[Fun;Get All Commands That Are Fun;FUN]
      $addOption[Utility;Get All Utility Commands;UTIL]
      $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
      $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
    `,
  data: {
    name: "help",
    description: "get all the commands!",
  },
};
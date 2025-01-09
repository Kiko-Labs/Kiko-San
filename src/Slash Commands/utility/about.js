module.exports = {
  //---> Main code
  code: `$c[---> Custom functions]
  $start
  $title[About $bn]
  $thumbnail[$userAvatar[$botID]]
  $description[✨ **$bn**
    $bn is a **multipurpose, open-source bot** crafted with care and precision by [Zack-911\\](https://discord.com/users/1273256222715285527).
    Designed to prioritize **stability**, **privacy**, and **scalability**, $bn offers a blend of **utility**, **reliability**, and **flexibility** to elevate your server experience. 🌐

    > "A bot for the community, by the community."

    🛡️ **Features at a Glance**
    🔹 **Customizability:** Tailor commands and settings to fit your unique needs.
    🔹 **Security:** Built with user privacy and safety as top priorities.
    🔹 **Performance:** Optimized for fast responses and minimal downtime.
    🔹 **Innovation:** Continuously updated with cutting-edge features.

    💡 **Special Thanks**
    We couldn’t have made $bn without the contributions of these incredible individuals:

    • [Leziuwu\\](https://discord.com/users/910837428862984213)
    • [Aurea\\](https://discord.com/users/1177953362717704232)

    🌟 **Why Choose $bn?**
    Whether you need moderation tools, fun commands, or seamless integrations, $bn is your go-to bot for **simplicity** and **power**. Join the journey today and be part of the ever-growing $bn community!

    Thank you for believing in $bn and helping it grow! 💖
  ]
  $footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]
  $addActionRow
  $addButton[$botInvite;Invite;Link]
  $addButton[https://kikosan.zack911.xyz;Website;Link]
  $addButton[https://discord.gg/VEKEfzdyqh;Server;Link]
  $addActionRow
  $addButton[https://github.com/Kiko-Labs/Kiko-San;Source Code;Link]
  $addButton[https://github.com/Kiko-Labs/Kiko-San/blob/stable/license.md;License;Link]
  $addButton[https://github.com/Kiko-Labs/Kiko-San/blob/stable/BSD%204-%20Clause%20Symplified.md;Simplified License;Link]
    `,
  //---> Slash command data
  data: {
    name: "about",
    description: "get the bots info",
  },
};

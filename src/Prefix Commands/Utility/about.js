module.exports = {
  name: "about",
  aliases: ["info", "bot", "credits"],
  description: "Get The Information About The Bot",
  usage: "about",
  category: "Utility",
  type: "messageCreate",
  code: `
    $start
    $title[About Kiko San]
    $thumbnail[$userAvatar[$botID]]
    $description[✨ **Kiko San**
      Kiko San is a **multipurpose, open-source bot** crafted with care and precision by [Zack-911\\](https://discord.com/users/1273256222715285527).
      Designed to prioritize **stability**, **privacy**, and **scalability**, Kiko San offers a blend of **utility**, **reliability**, and **flexibility** to elevate your server experience. 🌐

      > "A bot for the community, by the community."


      🛡️ **Features at a Glance**
      🔹 **Customizability:** Tailor commands and settings to fit your unique needs.
      🔹 **Security:** Built with user privacy and safety as top priorities.
      🔹 **Performance:** Optimized for fast responses and minimal downtime.
      🔹 **Innovation:** Continuously updated with cutting-edge features.


      💡 **Special Thanks**
      We couldn’t have made Kiko San without the contributions of these incredible individuals:

      • [Leziuwu\\](https://discord.com/users/910837428862984213)

      🌟 **Why Choose Kiko San?**
      Whether you need moderation tools, fun commands, or seamless integrations, Kiko San is your go-to bot for **simplicity** and **power**. Join the journey today and be part of the ever-growing Kiko San community!

      🌐 **Get Started:** [Invite Kiko San\\]($botInvite)
      💬 **Join Our Community:** [Discord Server\\](https://discord.gg/VEKEfzdyqh)

      Thank you for believing in Kiko San and helping it grow! 💖
    ]
    $image[$userBanner[$botID]]
    $footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]
    $addActionRow
    $addButton[https://github.com/Kiko-Labs/Kiko-San;Source Code;Link]
    $addButton[https://github.com/Kiko-Labs/Kiko-San/blob/stable/license.md;License;Link]
    $addButton[https://github.com/Kiko-Labs/Kiko-San/blob/stable/BSD%204-%20Clause%20Symplified.md;Simplified License;Link]

  `,
};

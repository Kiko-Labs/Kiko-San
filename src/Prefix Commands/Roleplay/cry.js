module.exports = {
  name: "cry",
  aliases: ["sad"],
  description: "show that you crying using a gif",
  usage: "cry",
  category: "Roleplay",
  source: "https://github.com/Kiko-Labs/Kiko-San/blob/stable/src/Prefix%20Commands/Roleplay/cry.js",
  type: "messageCreate",
  code: `
        $start
        $c[================= LIMITER START =================]

        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/cry/gif;GET]==200;
          $title[Error]
          $description[The api that kiko san uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]

        $c[================ LIMITER END =====================]
        $c[================ ACTUAL CODE =====================]
        $let[num;$randomNumber[1;24]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $title[$username[$authorID] Is Feeling Sad (ಥ﹏ಥ)]
        $image[https://purrbot.site/img/sfw/cry/gif/cry_$get[num].gif]
        $footer[$username[$authorID] is crying (ಥ_ಥ)]
  `,
};

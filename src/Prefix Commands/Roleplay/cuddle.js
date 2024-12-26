module.exports = {
  name: "cuddle",
  description: "sends a gif of you cuddling someone",
  usage: "cuddle [user]",
  category: "Roleplay",
  type: "messageCreate",
  code: `
        $start
        $c[================= LIMITER START =================]

        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/cuddle/gif;GET]==200;
          $title[Error]
          $description[The api that kiko san uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]

        $c[================ LIMITER END =====================]
        $c[================ ACTUAL CODE =====================]
        $let[num;$randomNumber[1;53]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $ifx[
          $if[$message[1]==;
            $title[$username[$authorID] Is Cuddling someone]
            $image[https://purrbot.site/img/sfw/cuddle/gif/cuddle_$get[num].gif]
            $footer[Cuddle mode: Activated]
          ]
          $else[
            $title[$username[$authorID] Is Cuddling $user[Username;$mesage[0]]]
            $image[https://purrbot.site/img/sfw/cuddle/gif/cuddle_$get[num].gif]
            $footer[Everyone deserves a good cuddle!]
          ]
        ]
    `,
};

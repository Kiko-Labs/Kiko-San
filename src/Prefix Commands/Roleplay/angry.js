module.exports = {
  name: "angry",
  description: "show that you are angry at someone using a gif",
  usage: "[user]",
  category: "Roleplay",
  type: "messageCreate",
  code: `
        $start
        $c[================= LIMITER START =================]

        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/angry/gif;GET]==200;
          $title[Error]
          $description[The api that $bn uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]

        $c[================ LIMITER END =====================]
        $c[================ ACTUAL CODE =====================]
        $let[num;$randomNumber[1;11]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $ifx[
          $if[$message[0]!=;
            $title[$username[$authorID] Is Angry At $user[Username;$message[0]]]
            $image[https://purrbot.site/img/sfw/angry/gif/angry_$get[num].gif]
            $footer[$user[Username;$message[0]] Should Get Chocolates For $username[$authorID] :3]
          ]
          $else[
            $title[$username[$authorID] Is Angry]
            $image[https://purrbot.site/img/sfw/angry/gif/angry_$get[num].gif]
            $footer[Someone Calm Them Down!]
          ]
        ]
    `,
};

module.exports = {
  name: "hug",
  description: "show that you are hugging someone using a gif",
  usage: "hug <user>",
  category: "Roleplay",
  source: "https://github.com/Kiko-Labs/Kiko-San/blob/stable/src/Prefix%20Commands/Roleplay/hug.js",
  type: "messageCreate",
  code: `
        $start
        $c[================= LIMITER START =================]

        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/hug/gif;GET]==200;
          $title[Error]
          $description[The api that kiko san uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]

        $onlyIf[$message[0]!=;
          $title[No User Provided]
          $description[Incorrect Usage. Correct Usage Is: hug <user>]
          $footer[Senpai didn't expect this from you]
        ]

        $onlyIf[$userExists[$user[ID;$message[0]]]==true;
          $title[Invalid User Provided]
          $description[The user you provided does not exist]
          $footer[Senpai.I didn't expect this from you]
        ]

        $c[================ LIMITER END =====================]
        $c[================ ACTUAL CODE =====================]
        $let[num;$randomNumber[1;93]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $title[$username[$authorID] Is Hugging $user[Username;$message[0]]]
        $image[https://purrbot.site/img/sfw/hug/gif/hug_$get[num].gif]
        $footer[**Warning:** Hug may include teasing and temptation :3]
    `,
};

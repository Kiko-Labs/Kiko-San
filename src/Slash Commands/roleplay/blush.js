module.exports = {
  code: `
        $start
        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/blush/gif;GET]==200;
          $title[Error]
          $description[The api that kiko san uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]
        $let[num;$randomNumber[1;26]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $title[$username[$authorID] Can't Seem To Hide Their Blush!]
        $image[https://purrbot.site/img/sfw/blush/gif/blush_$get[num].gif]
        $footer[$username[$authorID] is blushing :3]
    `,
  data: {
    name: "blush",
    description: "shows a gif of you blushing",
  },
};

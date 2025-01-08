module.exports = {
  code: `
        $start
        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/dance/gif;GET]==200;
          $title[Error]
          $description[The api that $bn uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]
        $let[num;$randomNumber[1;18]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $title[$username[$authorID] Can't Seem To Hide Their Excitement!]
        $image[https://purrbot.site/img/sfw/dance/gif/dance_$get[num].gif]
        $footer[$username[$authorID] is dancing :3]
    `,
  data: {
    name: "dance",
    description: "shows a gif of you dancing",
  },
};

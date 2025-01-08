module.exports = {
  code: `
        $start
        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/cuddle/gif;GET]==200;
          $title[Error]
          $description[The api that $bn uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]
        $let[num;$randomNumber[1;53]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $ifx[
          $if[$option[user]==;
            $title[$username[$authorID] Is Cuddling someone]
            $image[https://purrbot.site/img/sfw/cuddle/gif/cuddle_$get[num].gif]
            $footer[Cuddle mode: Activated]
          ]
          $else[
            $title[$username[$authorID] Is Cuddling $username[$option[user]]]
            $image[https://purrbot.site/img/sfw/cuddle/gif/cuddle_$get[num].gif]
            $footer[Everyone deserves a good cuddle!]
          ]
        ]
    `,
  data: {
    name: "cuddle",
    description: "sends a gif of you cuddling someone",
    options: [
      {
        type: 6,
        name: "user",
        description: "the user you want to cuddle",
        required: false,
      },
    ],
  },
};

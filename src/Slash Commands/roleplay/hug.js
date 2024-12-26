module.exports = {
  code: `
        $start
        $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/hug/gif;GET]==200;
          $title[Error]
          $description[The api that kiko san uses to get these gifs has either failed or is down.
            We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
            Use: n.help to get the support server link
          ]
          $footer[Sowwy senpai]
        ]
        $let[num;$randomNumber[1;93]]
        $ifx[
            $if[$charCount[$get[num]]==1;
                $let[num;00$get[num]]
            ]
            $else[$let[num;0$get[num]]]
        ]
        $title[$username[$authorID] Is Hugging $username[$option[user]]]
        $image[https://purrbot.site/img/sfw/hug/gif/hug_$get[num].gif]
        $footer[**Warning:** Hug may include teasing and temptation :3]
    `,
  data: {
    name: "hug",
    description: "show that you are hugging someone using a gif",
    options: [
      {
        type: 6,
        name: "user",
        description: "the user you want to hug",
        required: true,
      },
    ],
  },
};

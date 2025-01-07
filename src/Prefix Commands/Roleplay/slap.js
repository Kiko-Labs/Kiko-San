module.exports = {
  name: "slap",
  description: "Returns a gif of anime people slapping each other",
  usage: "<user>",
  category: "Roleplay",
  type: "messageCreate",
  code: `
    $start
    $onlyIf[$httpRequest[https://purrbot.site/api/list/sfw/slap/gif;GET]==200;
      $title[Error]
      $description[The api that kiko san uses to get these gifs has either failed or is down.
        We apologize for this inconvenience. Kindly report this to the discord server so that we can work on getting it up as soon as possible!
        Use: n.help to get the support server link
      ]
      $footer[Sowwy senpai]
    ]
    $onlyIf[$message[0]!=;
      $title[No User Provided]
      $description[Incorrect Usage. Correct Usage Is: hit <user>]
      $footer[Senpai didn't expect this from you]
    ]
    $onlyIf[$userExists[$user[ID;$message[0]]]==true;
      $title[Invalid User Provided]
      $description[The user you provided does not exist]
      $footer[Senpai.I didn't expect this from you]
    ]
    $let[num;$randomNumber[1;15]]
    $ifx[
      $if[$charCount[$get[num]]==1;
        $let[num;00$get[num]]
      ]
      $else[$let[num;0$get[num]]]
    ]
    $setUserVar[hit;$sum[1;$getUserVar[hit;$authorID]];$authorID]
    $title[$user[Username;$authorID] Hit $user[Username;$message[0]]]
    $image[https://purrbot.site/img/sfw/slap/gif/slap_$get[num].gif]
    $footer[Don't worry they didn't sustain any injuries :3]`,
};

module.exports = [
  {
    name: "user",
    params: ["type", "user"],
    code: `
    $onlyIf[$or[$env[type]==ID;$env[type]==Username];
      $start

      $description[$env[type] in not a valid type.
        Instead specify what you want.
        ID or Username
      ]
      $footer[Be Better Smh]
    ]
    $onlyIf[$env[user]!=;
      $start
      $title[**Custom Function Error**]
      $description[
        The User Parameter Cannot Be Left Empty!
      ]
      $footer[Be Better Smh]
    ]
    $onlyIf[$findUser[$env[user]]!=;
      $start
      $title[**Invalid User**]
      $description[$env[user] in not a valid user.]
      $footer[Be Better Smh]
    ]

    $ifx[
      $if[$env[type]==ID;$let[result;$findUser[$env[user]]]]
      $else[$let[result;$username[$findUser[$env[user]]]]]
    ]

    $return[$get[result]]
    `,
  },
];

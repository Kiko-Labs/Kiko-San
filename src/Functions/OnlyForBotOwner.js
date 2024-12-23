module.exports = [
    {
      name: "onlyForBotOwner",
      params: ["slash"],
      code: `
        $return[
            $onlyIf[$or[$env[slash]==true;$env[slash]==false];Custom Function onlyForBotOwner isnt being used properly! Use true or false instead of $env[slash] in parameters.
                $deleteIn[5s]]
            $onlyIf[$authorID==$botOwnerID;
                $ifx[
                    $if[$env[slash==true;$ephemeral
                        $color[#ff694b]
                        $title[$toTitleCase[not authorized to use this command]]
                        $description[Only $username[$botOwnerID] is authorized to use this command.
                            But hey... why dont you come over tonight and i will authorize you something *else* 💋💋
                        ]
                    ]
                    $else[
                        $color[#ff694b]
                        $title[$toTitleCase[not authorized to use this command]]
                        $description[Only $username[$botOwnerID] is authorized to use this command.
                            But hey... why dont you come over tonight and i will authorize you something *else* 💋💋
                        ]$deleteIn[15s]
                        $wait[15s]
                        $deleteCommand
                    ]
                ]
            ]
        ]]
      `
    },
];
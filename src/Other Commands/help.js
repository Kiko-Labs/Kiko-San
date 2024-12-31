module.exports = {
  type: "interactionCreate",
  code: `

    $c[=============================== LIMITERS ===================================]
    $onlyIf[$checkContains[$customID;helpSM]]
    $arrayLoad[ca;-;$customID]

    $onlyIf[$arrayAt[ca;1]==$authorID;$ephemeral
      This is not your command!
    ]

    $start
    $deferUpdate
    $ifx[

      $c[============================== RP ==========================================]

      $if[$selectMenuValues[0]==RP;
          $arrayLoad[cmds;-;$replace[$readDir[src/Prefix Commands/Roleplay;-];.js;]]
          $arrayMap[cmds;c;
          $let[n;$commandInfo[messageCreate;$env[c];name]]
          $let[u;$commandInfo[messageCreate;$env[c];usage]]
          $let[d;$commandInfo[messageCreate;$env[c];description]]
          $let[sc;$commandInfo[messageCreate;$env[c];sourcecode]]
          $return[**Name:** k!$get[n] $get[u]
              $get[d]];mappedcmds]
          $!editMessage[$channelID;$messageID;
          $title[Roleplay Commands]
          $thumbnail[$userAvatar[$botID]]
          $description[$arrayJoin[mappedcmds;

          ]]
          $footer[<> Means it is required. [\\] means it is optional]
          $addActionRow
          $addStringSelectMenu[helpSM-$authorID]
          $addOption[Home;Return To The Help Menu Home;HOME;;false]
          $addOption[Roleplay;Get All Commands Related To Roleplay;RP;;true]
          $addOption[Fun;Get All Commands That Are Fun;FUN]
          $addOption[Utility;Get All Utility Commands;UTIL]
          $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
          $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
        ]
      ]

      $c[==================================UTILITY CMDS ================================]

      $elseIf[$selectMenuValues[0]==UTIL;
        $arrayLoad[cmds;-;$replace[$readDir[src/Prefix Commands/Utility;-];.js;]]
        $arrayMap[cmds;c;
        $let[n;$commandInfo[messageCreate;$env[c];name]]
        $let[u;$commandInfo[messageCreate;$env[c];usage]]
        $let[d;$commandInfo[messageCreate;$env[c];description]]
        $let[sc;$commandInfo[messageCreate;$env[c];sourcecode]]
        $return[**Name:** k!$get[n] $get[u]
            $get[d]];mappedcmds]
        $!editMessage[$channelID;$messageID;
        $title[Utility Commands]
        $thumbnail[$userAvatar[$botID]]
        $description[$arrayJoin[mappedcmds;

        ]]
        $footer[<> Means it is required. [\\] means it is optional]
        $addActionRow
        $addStringSelectMenu[helpSM-$authorID]
        $addOption[Home;Return To The Help Menu Home;HOME;;false]
        $addOption[Roleplay;Get All Commands Related To Roleplay;RP;;false]
        $addOption[Fun;Get All Commands That Are Fun;FUN]
        $addOption[Utility;Get All Utility Commands;UTIL;;true]
        $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
        $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
        ]
      ]

      $c[====================================== FUN ========================================]

      $elseIf[$selectMenuValues[0]==FUN;
        $arrayLoad[cmds;-;$replace[$readDir[src/Prefix Commands/Fun;-];.js;]]
        $arrayMap[cmds;c;
        $let[n;$commandInfo[messageCreate;$env[c];name]]
        $let[u;$commandInfo[messageCreate;$env[c];usage]]
        $let[d;$commandInfo[messageCreate;$env[c];description]]
        $let[sc;$commandInfo[messageCreate;$env[c];sourcecode]]
        $return[**Name:** k!$get[n] $get[u]
            $get[d]];mappedcmds]
        $!editMessage[$channelID;$messageID;
        $title[Fun Commands]
        $thumbnail[$userAvatar[$botID]]
        $description[$arrayJoin[mappedcmds;

        ]]
        $footer[<> Means it is required. [\\] means it is optional]
        $addActionRow
        $addStringSelectMenu[helpSM-$authorID]
        $addOption[Home;Return To The Help Menu Home;HOME;;false]
        $addOption[Roleplay;Get All Commands Related To Roleplay;RP;;false]
        $addOption[Fun;Get All Commands That Are Fun;FUN.true]
        $addOption[Utility;Get All Utility Commands;UTIL;;false]
        $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
        $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
        ]
      ]

      $c[====================================== DEV ========================================]

      $elseIf[$selectMenuValues[0]==DEV;
        $arrayLoad[cmds;-;$replace[$readDir[src/Prefix Commands/Developer;-];.js;]]
        $arrayMap[cmds;c;
        $let[n;$commandInfo[messageCreate;$env[c];name]]
        $let[u;$commandInfo[messageCreate;$env[c];usage]]
        $let[d;$commandInfo[messageCreate;$env[c];description]]
        $let[sc;$commandInfo[messageCreate;$env[c];sourcecode]]
        $return[**Name:** k!$get[n] $get[u]
            $get[d]];mappedcmds]
        $!editMessage[$channelID;$messageID;
        $title[Developer Commands]
        $thumbnail[$userAvatar[$botID]]
        $description[$arrayJoin[mappedcmds;

        ]]
        $footer[<> Means it is required. [\\] means it is optional]
        $addActionRow
        $addStringSelectMenu[helpSM-$authorID]
        $addOption[Home;Return To The Help Menu Home;HOME;;false]
        $addOption[Roleplay;Get All Commands Related To Roleplay;RP;;false]
        $addOption[Fun;Get All Commands That Are Fun;FUN.false]
        $addOption[Utility;Get All Utility Commands;UTIL;;false]
        $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV;;true]
        $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
        ]
      ]

      $c[====================================== ECONOMY ======================================]

      $elseIf[$selectMenuValues[0]==ECONOMY;
        $arrayLoad[cmds;-;$replace[$readDir[src/Prefix Commands/Economy;-];.js;]]
        $arrayMap[cmds;c;
        $let[n;$commandInfo[messageCreate;$env[c];name]]
        $let[u;$commandInfo[messageCreate;$env[c];usage]]
        $let[d;$commandInfo[messageCreate;$env[c];description]]
        $let[sc;$commandInfo[messageCreate;$env[c];sourcecode]]
        $return[**Name:** k!$get[n] $get[u]
            $get[d]];mappedcmds]
        $!editMessage[$channelID;$messageID;
        $title[Economy Commands]
        $thumbnail[$userAvatar[$botID]]
        $description[$arrayJoin[mappedcmds;

        ]]
        $footer[<> Means it is required. [\\] means it is optional]
        $addActionRow
        $addStringSelectMenu[helpSM-$authorID]
        $addOption[Home;Return To The Help Menu Home;HOME;;false]
        $addOption[Roleplay;Get All Commands Related To Roleplay;RP;;false]
        $addOption[Fun;Get All Commands That Are Fun;FUN.false]
        $addOption[Utility;Get All Utility Commands;UTIL;;false]
        $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV;;false]
        $addOption[Economy;These Commands Are Restricted To A Select Few Individuals;ECONOMY;;true]
        ]
      ]

      $c[====================================== HOME ========================================]

      $elseIf[$selectMenuValues[0]==HOME;
        $!editMessage[$channelID;$messageID;
          $start
          $title[Help Has Arrived!]
          $description[Hello, I am Kiko San, your all-in-one server assistant!

            **__Argument Types:__**

            • $escapeCode[**<argument>**] means the argument is **required**.
            • $escapeCode[**[argument\\]**] means the argument is **optional**.

            **__Current Categories:__**

            • **Roleplay**: Commands related to roleplaying.
            ------------------------------------------------
            • **Utility**: Useful commands for managing and enhancing the server.
            ------------------------------------------------
            • **Fun**: Fun and entertaining commands for the community.
            ------------------------------------------------
            • **Developer**: Restricted commands, only available to select individuals.
            ---------------------------------------------

            **__Prefix Commands:__** $commandCount

            Need help with something specific? Select a category below to get a list of related commands!
          ]

          $thumbnail[$userAvatar[$botID]]
          $image[$userBanner[$botID]]
          $footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]
          $addActionRow
          $addStringSelectMenu[helpSM-$authorID]
          $addOption[Home;Return To The Help Menu Home;HOME;;true]
          $addOption[Roleplay;Get All Commands Related To Roleplay;RP]
          $addOption[Fun;Get All Commands That Are Fun;FUN]
          $addOption[Utility;Get All Utility Commands;UTIL]
          $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
          $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
        ]
      ]
    ]

  `,
};

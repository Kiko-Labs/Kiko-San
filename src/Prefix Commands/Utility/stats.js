module.exports = {
  name: "stats",
  description: "retrieve the bots stats",
  usage: "stats",
  category: "utility",
  type: "messageCreate",
  code: `
    $start
    $author[$username[$authorID];$userAvatar]
    $title[📊 System Information: $bn]
    $description[
      **💾 RAM Usage**
      🔹 $ram / $ramTotal[GB]

      **💻 CPU Details**
      🔹 **Name:** $cpuModel
      🔹 **Architecture:** $cpuArch
      🔹 **Cores:** $cpuCores

      **🖥️ Operating System**
      🔹 **OS:** $os
      🔹 **Uptime:** $osUptime

      **🛠️ Technical Info**
      🔹 **Node.js Version:** $nodeVersion
      🔹 **Ping:** $round[$ping]ms
      🔹 **Bot Uptime:** $parseMs[$uptime]
    ]
  `,
};

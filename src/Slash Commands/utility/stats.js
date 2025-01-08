module.exports = {
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
  data: {
    name: "stats",
    description: "Get the bot's system stats in an organized embed.",
  },
};

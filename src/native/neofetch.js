const { execSync } = require("child_process");

function getNeofetch() {
  try {
    const output = execSync("neofetch --off --stdout --noImage", {
      encoding: "utf-8",
    });
    return output;
  } catch (error) {
    console.error("Error executing neofetch:", error);
    return "Failed to retrieve neofetch output.";
  }
}

module.exports = { getNeofetch };

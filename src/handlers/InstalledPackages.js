const chalk = require("chalk");
const { exec } = require("child_process"); // Make sure to require exec

const DisplayInstalledPackages = async () => {
  let resolvedPackages = "Loading...";

  const getPackages = () => {
    return new Promise((resolve, reject) => {
      exec("pnpm list --json", (error, stdout, stderr) => {
        // pnpm list --json
        if (error) {
          reject(`Error: ${stderr || error.message}`);
          return;
        }

        let data;
        try {
          data = JSON.parse(stdout); // Try to parse the JSON output
        } catch (parseError) {
          reject(`Error parsing JSON: ${parseError.message}`);
          return;
        }

        const topLevelPackage = data[0]; // Access the top-level package object
        const dependencies = topLevelPackage.dependencies; // Get the dependencies

        if (!dependencies || Object.keys(dependencies).length === 0) {
          resolve(chalk.hex("#ff69b4")("No installed packages found.")); // Soft pink color for no packages
        } else {
          const packages = Object.keys(dependencies)
            .map((pkg) => {
              const version = dependencies[pkg].version; // Get the version of the package
              return `${chalk.hex("#ff80ff")(pkg)}@${chalk.hex("#ff80ff")(version)}`; // Display package name and version
            })
            .join("\n");
          resolve(packages);
        }
      });
    });
  };

  try {
    resolvedPackages = await getPackages();
    console.log(
      chalk.hex("#ff1493")("✨ Installed Packages ✨") +
        "\n" +
        resolvedPackages,
    ); // Title with a pinkish glow
  } catch (error) {
    console.error(
      chalk.hex("#ff6347")("❌ Failed to fetch packages: ") + chalk.bold(error),
    ); // Error in red-orange with bold
  }
};

module.exports = DisplayInstalledPackages; // Export the function

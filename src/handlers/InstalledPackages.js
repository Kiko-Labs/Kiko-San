const chalk = require('chalk');
const { exec } = require('child_process'); // Make sure to require exec

const DisplayInstalledPackages = async () => {
  let resolvedPackages = 'Loading...';

  const getPackages = () => {
    return new Promise((resolve, reject) => {
      exec('npm list --depth=0 --json', (error, stdout, stderr) => {
        if (error) {
          reject(`Error: ${stderr || error.message}`);
          return;
        }

        const data = JSON.parse(stdout);
        if (!data.dependencies || Object.keys(data.dependencies).length === 0) {
          resolve(chalk.hex('#ff69b4')('No installed packages found.')); // Soft pink color for no packages
        } else {
          const packages = Object.keys(data.dependencies)
            .map(pkg => {
              const version = data.dependencies[pkg].version; // Get the version of the package
              return `${chalk.hex('#ff80ff')(pkg)}@${chalk.hex('#ff80ff')(version)}`; // Display package name and version
            })
            .join('\n');
          resolve(packages);
        }
      });
    });
  };

  try {
    resolvedPackages = await getPackages();
    console.log(chalk.hex('#ff1493')('✨ Installed Packages ✨') + '\n' + resolvedPackages); // Title with a pinkish glow
  } catch (error) {
    console.error(chalk.hex('#ff6347')('❌ Failed to fetch packages: ') + chalk.bold(error)); // Error in red-orange with bold
  }
};

module.exports = DisplayInstalledPackages; // Export the function

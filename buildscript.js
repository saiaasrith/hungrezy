const { exec } = require('child_process');

console.log('Starting build process...');

// Run commands sequentially using Promises
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Command "${command}" failed with error: ${error.message}`);
        reject(error);
      } else {
        console.log(stdout);
        resolve();
      }
    });
  });
}

// Example build process steps
async function build() {
  try {
    // Clean build directory
    await runCommand('rm -rf dist');

    // Install dependencies (if needed)
    await runCommand('npm install'); // or yarn install

    // Transpile TypeScript (assuming TypeScript is already a dev dependency)
    await runCommand('npx tsc');

    // Copy static files or other build tasks
    await runCommand('cp -R public dist/public');

    console.log('Build process completed successfully!');
  } catch (error) {
    console.error('Build process failed:', error);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
}

// Start the build process
build();

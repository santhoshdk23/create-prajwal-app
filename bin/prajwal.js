#! /usr/bin/env node
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/santhoshdk23/create-prajwal-app.git ${repoName}`;
const npmInstallCommand = `cd ${repoName} && npm install`;

console.log(`Creating a new WordPress theme called ${repoName}...`);
const { execSync } = require('child_process');

const runCommand = (command) => {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }
    return true;
};
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) {
    console.error('Failed to checkout the repo');
    process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}...`);
const installed = runCommand(npmInstallCommand);

if (!installed) {
    console.error('Failed to install dependencies');
    process.exit(-1);
}
console.log(`Success! Created ${repoName} at ${process.cwd()}/${repoName}`);
console.log('Inside that directory, you can run several commands:');
console.log('  npm run start && npm run build');
var runCommand = require('child-exec-promised');

module.exports = async function() {
    await runCommand(`git add package-lock.json`);
    await runCommand(`git commit -m 'Update package-lock.json'`);

    console.log('package-lock.json committed');
}

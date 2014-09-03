// Copies remaining files to places other tasks can use
module.exports = {
    native: {
        cmd: 'cordova build ios',
        cwd: 'platforms',
        stdout: true,
        stderr: true
    }
};
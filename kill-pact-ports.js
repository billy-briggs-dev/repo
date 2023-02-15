const { execSync } = require('child_process');
const portsToCheck = require('./ports');

const platform = process.platform;
const isWindows = platform === 'win32';
const isLinux = platform === 'linux';
const isDarwin = platform === 'darwin';

Object.entries(portsToCheck).forEach(([name, port]) => {
  try {
    let command;
    switch (true) {
      case isWindows:
        command = `netstat -a -n -o | find ":${port}"`;
        break;
      case isDarwin:
        command = `lsof -i TCP:${port} | awk 'NR==2{print $2}'`;
        break;
      case isLinux:
        command = `netstat -an | grep -w LISTEN | grep ".*:${port}\\s"`;
        break;
      default:
        throw new Error(`Unsupported platform: ${platform}`);
    }
    const result = execSync(command).toString().trim();
    const pid = isWindows ? result.split(/\s+/).pop() : result.split(/\s+/)[0];
    execSync(`kill ${pid}`);
    console.log(`Process running on ${name} (port ${port}) has been killed.`);
  } catch (error) {
    console.log(`No process found on ${name} (port ${port}).`);
  }
});

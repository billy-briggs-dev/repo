const fs = require('fs');

let checkedPorts = new Set();

function checkPort(port) {
  return new Promise((resolve, reject) => {
    if (checkedPorts.has(port)) {
      resolve(false);
    } else {
      const tester = net
        .createServer()
        .once('error', (err) => {
          if (err.code === 'EADDRINUSE') {
            resolve(false);
          }
        })
        .once('listening', () => {
          tester
            .once('close', () => {
              resolve(true);
            })
            .close();
        })
        .listen(port);
      checkedPorts.add(port);
    }
  });
}

async function getRandomPorts() {
  const ports = new Set();
  while (ports.size < 4) {
    const port = Math.floor(Math.random() * (65535 - 1024 + 1) + 1024);
    if (!ports.has(port)) {
      const isAvailable = await checkPort(port);
      if (isAvailable) {
        ports.add(port);
      }
    }
  }
  return Array.from(ports);
}

getRandomPorts().then((ports) => {
  fs.writeFileSync(
    'pact-ports.js',
    `module.exports = ${JSON.stringify(ports)}`
  );
});

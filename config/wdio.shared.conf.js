export const config = {
  runner: 'local',
  port: 4723,
  specs: ['./test/scenario/**/*.js'],
  exclude: [],
  capabilities: [],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
      [
          'appium',
          {
              command: 'appium',
              args: {
                  relaxedSecurity: true,
                  log: './appium.log',
              },
          },
      ],
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
      ui: 'bdd',
      timeout: 3 * 60 * 1000,
  },
};
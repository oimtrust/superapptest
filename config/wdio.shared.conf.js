export const config = {
    // on a remote machine).
    runner: "local",
    port: 4723,
    specs: ["./test/scenario/**/*.js"],
    // Patterns to exclude.
    exclude: [
      // 'path/to/excluded/files'
    ],
    capabilities: [],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "info",
    bail: 0,
    baseUrl: "http://localhost",
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 300000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: [
      [
        "appium",
        {
          // This will use the globally installed version of Appium
          command: "appium",
          args: {
            // This is needed to tell Appium that we can execute local ADB commands
            // and to automatically download the latest version of ChromeDriver
            relaxedSecurity: true,
            // Write the Appium logs to a file in the root of the directory
            log: "./appium.log",
          },
        },
      ],
    ],
    // before running any tests.
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
      ui: "bdd",
      timeout: 3 * 60 * 1000, // 3min
    },
  };
  
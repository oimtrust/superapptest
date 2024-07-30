import { join } from "path";
import { config as baseConfig } from "./wdio.shared.conf.js";
import constant from "./constant.conf.js";

baseConfig.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "Android",
    maxInstances: 1,
    "appium:deviceName": constant.ANDROID_DEVICE_NAME,
    "appium:platformVersion": constant.ANDROID_VERSION,
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "UiAutomator2",
    // The path to the app
    "appium:app": join(process.cwd(), `./apps/${constant.ANDROID_APP_FILE}`),
    "appium:newCommandTimeout": 240,
  },
];

export const config = {
  ...baseConfig,
};
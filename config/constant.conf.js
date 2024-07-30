import * as dotenv from "dotenv";
dotenv.config();

export default {
  ANDROID_DEVICE_NAME: process.env.ANDROID_DEVICE_NAME,
  ANDROID_VERSION: process.env.ANDROID_VERSION,
  ANDROID_APP_FILE: process.env.ANDROID_APP_FILE,
};
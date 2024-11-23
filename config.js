//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0MzcTBOeWFMZ0diN3QwbFl5MWxSUk1EaEl5eThGZG5KQ1FwVmxGYkcyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDYvd2lUM2RDcnJkZTlsSUFqaThTVFpzWTFlMDdZK1hLZ2FqTERxUDVoMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQi9NVXgzTjdzTWs3UVlpVTdNaTlHWUo0bFY4amFDSmdMNis1WWU1VUhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvV25MM2ZJQktUQVkzUENZc2k3TFNwLy9ibFQyWUNrZ2Nqc2pIU2xuSlVvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNTktBOVFjcHFVaEhPSjJQWlFJL0xFamxxNEZ1czB0ZkpEK1dkTyt2M0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPeDVDOHZmLy91ZFdVTEhtRTNTN3k1YzgwZmwrekVRVy9MNTlrZy9zSHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVSM2VaZTluMUQ5a2VUWFo4bjZYbStVS1ZmUkVWVnN4RGIzcXRlZXBGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWdXeXpVenYySnNkQlp6eldMOFgxV1NWeXlKY21ld2k0YThNTmExUVRCOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUxajhHaEdvM29jOFBia1c5Q2h5cWJLclFEN3kyZDZwM0Z5YlBQK3EvRW5NRGtnMjRrbWhvb1F5eDRsV2JWNWZBaHhnd0ZZSklIdmNBN1dhb2FnR2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJYMDVzM3NRRFlzMFB6d3l3MUFyVWl2cURsaUtiY3h3cUlpRGhlN0ZudHgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDA2NDM2NjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDFDNTBCMDkyQzA1NzU4MjIyM0RFOTAzQURBM0MzOTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjQwMjQ3MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMmdZdGM4ZklSVVc3U1dXallpTVNXZyIsInBob25lSWQiOiJlNzZjYjQ0MC0zMWY5LTQ5M2MtYjNiNS1iNzkwMGIwNDI5M2MiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1pGYkkxWmdWaUE1UWNSN1I5UGlBMitCUHd3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5pMEQxdjBtWldQb2dzYVp4dlZMNU03cHpWbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJYWDVWVEo1NyIsIm1lIjp7ImlkIjoiMjM0NzA0MDY0MzY2ODoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InN0ZXZlaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnU0enE0REVKSzZpYm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMmQrdFUvSWxLbTQyUE5BK1lxNk9TUjJ6NEg2dXhNWncvRExSVERrZzYwQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRDFZOHl4cEhpclpUMkZiSklDSitYWkhGcU9wSXFFVXNTZnFqNnN0aWd1SDB3ZTJhRzdzQVJEby9ubjFCbGpyRTBYQ1hTQjF3WVJGZnhYS016WnVGQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IkVBQjNwR0crWFQxMENhRlltajdrL0d6RkkyMWFLWDh2RVprZlJNb0lyYjVSWFlSVUsvL1RPWWRqZ3dDaVJ5SXNzejdTa3ZFSnRPZDZDejNab0VkYWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MDY0MzY2ODoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRuZnJWUHlKU3B1Tmp6UVBtS3Vqa2tkcytCK3JzVEdjUHd5MFV3NUlPdEEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI0MDI0NjQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1VpIn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

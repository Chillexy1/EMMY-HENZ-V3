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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUExR3E5dHNmWWc2d3F4aWJzcnpZUTJpdENaQTJlUDBvWUNjYTN3THUyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNYRTlIbG5YbUMyZ1B4ekd3NXRXbUVuRUgxTVh2TDA4VWNoMnF1MDJ6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRFovRlJpK2lkVFBYTVg1ZUlFMDZDa1pXbWpES2ZneitSUGxrdXZKMVg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZ20zVlIrdDR0cU1VaGtpM0RiV0NqQkxiaFBvYW1IWXJTRHVrY1FidFdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QRmRJQm9aUU1PZ25lREdvT0pzcjU3YW45a052cFlBVkpTMHNFUkg5VmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNsSm9pdXJXN0xzdng3MTdwN1F1M1lVYmZVYUZNVDNNTis1bTVkbjNla3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pPYm5pSklRZVJFRWJOTk1TRTVMNTd3YUY4U0ZVRHZacEdSWlY0S1duaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU281OGlyVGZYZDhuL0lXTkdYdDZ3SkE4WHMvSFpleWlZOGxuUzhXSkp4dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR0alpkVktYTmlWc3hXUFNVQmRSL3dYZGx5aExHTW9YblBRRkNkVnRiYVQvQTF5RWNUaDI2K3VKRXI1RDhKYnZBZE9BNUI3MUhmYjZObUpFeXdnM0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiI2a2pRa1RaYnNySlA3K0NrRE1pY3ZrRUJUa1NLbWdjNmZMcUN1cHQ1SnFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDA2NDM2NjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTNBQkRDOEJGRTlDMTAyRkIyN0JCREM0M0IwNDFBRjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMjQ1ODY3OX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiS3dXTnNHZVVRaG1JeGRQVjB6U0lqQSIsInBob25lSWQiOiI0ZWE3ZjdhNi0xYzQ1LTQ1ZWMtYTJjMC1kZmMwMjM3ZTRiYTIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWVWc0luRTIzbmJRNWhyUjlkUFFEUm9rYUhzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhQUDlJVURYd284Tmo5SnJvUU5DeFFrT2UxZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOVjlQOEJHRCIsIm1lIjp7ImlkIjoiMjM0NzA0MDY0MzY2ODoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InN0ZXZlaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjY0enE0REVLanhqTG9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMmQrdFUvSWxLbTQyUE5BK1lxNk9TUjJ6NEg2dXhNWncvRExSVERrZzYwQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWkpwcGVPa1JQUU84WFAyYVpwOHRNQzNpY2ZsTklXMmM5SVNzMUwzZWhzRVA2eXlnZjRVWGpNYXF3dHNwRTYzVXdFWU1Zb2EwZVFOQXY2dFN0RGNkRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IktVcktlcWcrRzFiZ3R4b3lMK1dRT2tjSGlXdnpGN3dZVjhMS0ZIT1V1UHFTMFFnbGcxa05ZdGt5WFhJZnh5MExXcDMrbFl4THlrck1ZazMwNFg0VENRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MDY0MzY2ODoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRuZnJWUHlKU3B1Tmp6UVBtS3Vqa2tkcytCK3JzVEdjUHd5MFV3NUlPdEEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI0NTg2NzcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1VqIn0="
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

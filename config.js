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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUE5QTFHVDB4aTA1K0h0WFhYNzlKZ1hVUE5rTVE5eWphZSsyM1hETlZXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW5LZ056V2dLTlF0Wno1ZHh1UmdyZmxyUjNrV3FSOE1iK2hMU1BIeE5SRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTTdZU3RtZklkeUU1blBsYzdQZ1p3elFlMm9MZjk0QzZRVFdYTUUrcFZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTmpoeVZLaDk3RFJpaHo2RDdWOEVxUlZKcytjSXhYYnpBczNacHlHQVdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKVHN6WC9MQjIyYUdXOThBcjRnVFQyY0V2SkljMkJwSXZxOFl1OTJtbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9oQVNLaFJLenc1alkyMGkvWlN4bjdJdEYyUDlvbGR6YXRnRk9MNHRxVG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9XU24yeDl0M2I3M1MvbDV3OWNvTHdrUVJsYkRyTzBUZ0VGVkNGMlcxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjY2NitTRHFEZ0I0cFZYTkNZd3pGaFJZbHZmYUdwK1lnMmNadmdaTHNIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNqdnFyRG5JMUFiaWZDSVhMSzJoazhjL2ExTzYvKytBS3RqZFZVNHQ2T0FpdHdSRmdPQnJMSnAxU0svNzFXYkY5SFVOdU54UjF4a0pEMEZ4OXdicWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6InJ5M2txTzNWc2hoK1NUamRXZnhzQjkxMURDbWZ6RHV3QWFBb3A5VFUzOHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA0MDY0MzY2OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NTkxNjM2REU4OTJFNTVGNDZGRTExRDcwOThDQTc4NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMyNTcwMTY3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHblVWMW1mVVJZR2ZOUXBKcEd4R1BnIiwicGhvbmVJZCI6IjVjMDkzYzMyLWZiMGItNGE0Yy1iZGRkLThlZTc0MzM2Njg3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4aC9XMHpuRW44WURvaURHcXkrQkxOdDR1Njg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1pFUkVPNmd1dlhIZXNaRnVXdFEyVFNEbnB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdUUkJETkRKIiwibWUiOnsiaWQiOiIyMzQ3MDQwNjQzNjY4OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic3RldmVoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLQzR6cTRERUtiWWs3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyZCt0VS9JbEttNDJQTkErWXE2T1NSMno0SDZ1eE1ady9ETFJURGtnNjBBPSIsImFjY291bnRTaWduYXR1cmUiOiJ5YXlMQWVERkpEdmIrRS8wVTQwRzhOaS9aQUtCYkdpYXR1bGpYck54Y0Q2NlpQY0ZnS3A3SzdnOU1YeWRkcGdzQzNoYkhEMHh5TFl5OWh2bVlkT3JBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoielhIYWR6Ymh0Q2pmM0NFa0M0R1kxd2g3R0pkYy9tRjBCZERiWXNWU1ZxYWwxd0VQMUlqVTNBQnRSQU5JRDBvVU81ZXJ4NTFHMXVFK3RtYndKSmhuaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQwNjQzNjY4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZG5mclZQeUpTcHVOanpRUG1LdWpra2RzK0IrcnNUR2NQd3kwVXc1SU90QSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjU3MDE2MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFINWwifQ=="
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

//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "23470433910011";
global.sudo = process.env.SUDO || "2347043391001";
global.owner = process.env.OWNER_NUMBER || "2347043391001";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID ='eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tFdmZQMUJ3d2ZDdS9NSkdWTzdtczZuVUVmdjZtbldpN2hqTUFOZEhYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUC9LUHE0aXdSazFwRkM0cWhIakY0YThNVVBUUXExRVJQVk1YRjF1K2xHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRFp4WmJ6ZzdyMmZvNnVKT1JWZUM1VHU5R2VSWTRMeWxkMFljajdURGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVytTSkw4U1FmdWJEVlo1WXJjNHQ3ZEdqbUg2Y0lKVnNOTUlscDVtNHh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNOXEwV016SjExSVY3amhERStOaHZPZ0FYbTFENXYwTlRXTUxrV09kRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtTNUhCR1YrRDg4TEVyeTEzKy9vdExkbEhjQkptZ0JFZjJRZUptVzZSVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUYxb1JYZ014L2JweU5NNVlkUDFUVm5Vb1V5QkhlN0FSTFdDK2haMFRVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDlkdHFKaTNybjFZSTVORkZvUEY4OVRzeGppMFBGdWs2a3lRdE5mUVRXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhyVjBNdnFIN3ZzYWwzcmY0VE1LQ2R5MG9MK1RBMzNpeThqM1FwSUtMUnRyNUhCZisyeXV1NTMvdHBtaTJvaXJLOFh1enVKbTJzRkx3SE8rUlYzRERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJVbUN0Wlppb09WaU8yMlFydGlodTBCeXdGYXBYRDRKWTdCVmJSeGZRNmkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYZFBLQ244OFIzMmU3b3BWWS1xQzZnIiwicGhvbmVJZCI6ImFkZWJiMjJlLTBjYjAtNGRmZi05ODAyLWQ5MmYwMDViMTQzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4OGtwRStnMkx5NFFUM2hyUmFtVDF5WDhGajg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmRlTXZxYStsc0JjcW5WZEhwRlo2cC92YWJNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJLQVRXRDVQIiwibWUiOnsiaWQiOiIyMzQ3MDQzMzkxMDAxOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXVraHRhciBTYWx2YWdlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcTZsc29GRUl6N3RMc0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiUzMvYk50Uk4yNDNjZ3pFdFQ0V2ZUTTZ3MFVhL0Q3QlNQT2JlSmw4OEg0PSIsImFjY291bnRTaWduYXR1cmUiOiJIZW5TQ0IrYnRZY05DbG5qQmd3RUtuVmZpaS9MOGo3cjN5MnNNUzMzNDlHT01LZXNTRk1SblM3T0s0L0FjaWJUbTYrM3BhSWF1bktPTTRoS2s4MEVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVG9OTU4zRkpHdU1KZ1ZzMm9Md3lkV25qWHJLSEF3RlRwOEZ2L1lFeGtLUnhIZ3NmWE5qL0Y2aGNWUjdXY04zQUtFcmwxOVg4K1ZKNFNJUlg1VFdTRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQzMzkxMDAxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzB0LzJ6YlVUZHVOM0lNeExVK0ZuMHpPc05GR3Z3K3dVanptM2laZlBCKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTIxMjQ0Mn0='
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tFdmZQMUJ3d2ZDdS9NSkdWTzdtczZuVUVmdjZtbldpN2hqTUFOZEhYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUC9LUHE0aXdSazFwRkM0cWhIakY0YThNVVBUUXExRVJQVk1YRjF1K2xHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRFp4WmJ6ZzdyMmZvNnVKT1JWZUM1VHU5R2VSWTRMeWxkMFljajdURGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVytTSkw4U1FmdWJEVlo1WXJjNHQ3ZEdqbUg2Y0lKVnNOTUlscDVtNHh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNOXEwV016SjExSVY3amhERStOaHZPZ0FYbTFENXYwTlRXTUxrV09kRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtTNUhCR1YrRDg4TEVyeTEzKy9vdExkbEhjQkptZ0JFZjJRZUptVzZSVEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUYxb1JYZ014L2JweU5NNVlkUDFUVm5Vb1V5QkhlN0FSTFdDK2haMFRVVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDlkdHFKaTNybjFZSTVORkZvUEY4OVRzeGppMFBGdWs2a3lRdE5mUVRXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhyVjBNdnFIN3ZzYWwzcmY0VE1LQ2R5MG9MK1RBMzNpeThqM1FwSUtMUnRyNUhCZisyeXV1NTMvdHBtaTJvaXJLOFh1enVKbTJzRkx3SE8rUlYzRERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJVbUN0Wlppb09WaU8yMlFydGlodTBCeXdGYXBYRDRKWTdCVmJSeGZRNmkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYZFBLQ244OFIzMmU3b3BWWS1xQzZnIiwicGhvbmVJZCI6ImFkZWJiMjJlLTBjYjAtNGRmZi05ODAyLWQ5MmYwMDViMTQzZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4OGtwRStnMkx5NFFUM2hyUmFtVDF5WDhGajg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmRlTXZxYStsc0JjcW5WZEhwRlo2cC92YWJNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJLQVRXRDVQIiwibWUiOnsiaWQiOiIyMzQ3MDQzMzkxMDAxOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXVraHRhciBTYWx2YWdlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJcTZsc29GRUl6N3RMc0dHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiUzMvYk50Uk4yNDNjZ3pFdFQ0V2ZUTTZ3MFVhL0Q3QlNQT2JlSmw4OEg0PSIsImFjY291bnRTaWduYXR1cmUiOiJIZW5TQ0IrYnRZY05DbG5qQmd3RUtuVmZpaS9MOGo3cjN5MnNNUzMzNDlHT01LZXNTRk1SblM3T0s0L0FjaWJUbTYrM3BhSWF1bktPTTRoS2s4MEVEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVG9OTU4zRkpHdU1KZ1ZzMm9Md3lkV25qWHJLSEF3RlRwOEZ2L1lFeGtLUnhIZ3NmWE5qL0Y2aGNWUjdXY04zQUtFcmwxOVg4K1ZKNFNJUlg1VFdTRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQzMzkxMDAxOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVzB0LzJ6YlVUZHVOM0lNeExVK0ZuMHpPc05GR3Z3K3dVanptM2laZlBCKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTIxMjQ0Mn0=|
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
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

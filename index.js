import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8399278388:AAGykqnSENSW30QNMGLJYFUbG-5-JskSSuE";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;

  bot.sendMessage(chatId, `Salom -> ${text}`);

  console.log(msg);
  //   console.log("*********");
  //   console.log(chatId, text);
});

console.log("Bot ishga tushdi...");

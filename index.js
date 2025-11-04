import TelegramBot from "node-telegram-bot-api";
const TOKEN = "8399278388:AAGykqnSENSW30QNMGLJYFUbG-5-JskSSuE";
const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstname = msg.chat.first_name;
  const menuPhoto = "./assets/images/1.webp";

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstname}`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 😜" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    // bot.sendMessage(chatId, "Salom, sizga qanday yordam bera olaman?");
    bot.sendPhoto(chatId, "./assets/images/lambo.jpg", {
      caption: `
      Lamborghini Urus is the first Super Sport Utility Vehicle in the world, merging the soul of a super sports car with the practical functionality of an SUV.
      `,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Ma'lumot", callback_data: "info" },
            { text: "Rasmlar", callback_data: "photos" },
          ],
          [{ text: "Narxi", callback_data: "price" }],
        ],
      },
    });
  } else if (text == "Menu 😜") {
    const kutingXabari = await bot.sendMessage(chatId, "Iltimos kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, kutingXabari.message_id);
      bot.sendPhoto(chatId, menuPhoto, {
        caption: "Bizning menyuyimiz...",
        reply_markup: {
          keyboard: [
            [{ text: "Manti" }, { text: "Karam" }],
            [{ text: "Shashlik" }, { text: "Hotdog" }],
          ],
        },
      });
    }, 1000);
  }

  console.log(msg);
});

bot.on("callback_query", function (query) {
  console.log(query);
  const data = query.data;
  const chatId = query.message.chat.id;

  if (data == "info") {
    bot.sendMessage(chatId, "Bu yerda Lamborghini haqida ma'lumot olasiz");
  } else if (data == "photos") {
    bot.sendPhoto(chatId, "./assets/images/lambo.jpg");
  } else if (data == "price") {
    bot.sendMessage(chatId, "175,000 dollar", {
      reply_markup: {
        inline_keyboard: [[{ text: "Sotib olish", callback_data: "buy" }]],
      },
    });
  } else if (data == "buy") {
    bot.sendMessage(chatId, "Pullarni Soliyajonga bering... Mashina unda");
  }
});

console.log("Bot ishga tushdi...");

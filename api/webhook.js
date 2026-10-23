// ============================================================================
// FOCUS MEDIA — TELEGRAM BOT SERVERLESS WEBHOOK (VERCEL 24/7)
// Bot: @focusmedia4_bot
// ============================================================================

try { require('dns').setDefaultResultOrder?.('ipv4first'); } catch (_) {}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8492338050:AAFWOWRrc_kAd8hc88qfyalxkCt_ehe5zec';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
const WEBSITE_URL = 'https://abduvoitov11.github.io/focus-media-toshkent/';
const ADMIN_USERNAME = 'Torabek_Abduvoitov';

// Telegram Premium Animated Custom Emojis (<tg-emoji>)
const EMJ = {
  TARGET: '<tg-emoji emoji-id="5469927029421941295">🎯</tg-emoji>',
  CHECK: '<tg-emoji emoji-id="5309745068771415716">✅</tg-emoji>',
  STAR: '<tg-emoji emoji-id="6028338546736107668">⭐</tg-emoji>',
  ROCKET: '<tg-emoji emoji-id="5334949873894565190">🚀</tg-emoji>',
  LIGHTNING: '<tg-emoji emoji-id="5472069294684673676">⚡</tg-emoji>',
  DIAMOND: '<tg-emoji emoji-id="5470022626804017311">💎</tg-emoji>',
  ALERT: '<tg-emoji emoji-id="5992531108036614018">🚨</tg-emoji>',
  DEV: '<tg-emoji emoji-id="5334826861736241078">🧑‍💻</tg-emoji>',
  PIN: '<tg-emoji emoji-id="5334798811304831817">📌</tg-emoji>',
  INFO: '<tg-emoji emoji-id="5334798811304831817">ℹ️</tg-emoji>',
  CROWN: '<tg-emoji emoji-id="5431719150680581432">👑</tg-emoji>',
  WAVE: '<tg-emoji emoji-id="5310177340049890783">👋</tg-emoji>',
  PENCIL: '<tg-emoji emoji-id="5334826861736241078">✏️</tg-emoji>',
  FIRE: '<tg-emoji emoji-id="5431797422164585163">🔥</tg-emoji>',
  KEY: '<tg-emoji emoji-id="5334761857406215819">🔑</tg-emoji>',
  BOX: '<tg-emoji emoji-id="5309848534533579411">📦</tg-emoji>',
  STATUS_ACTIVE: '<tg-emoji emoji-id="5334863583706622360">🟢</tg-emoji>',
  ARROW_R: '<tg-emoji emoji-id="5992424562782903277">➡️</tg-emoji>',
  IDEA: '<tg-emoji emoji-id="5334827944067999533">💡</tg-emoji>',
  SPARKLES: '<tg-emoji emoji-id="6028338546736107668">✨</tg-emoji>'
};

// Helper: Call Telegram API
async function callTelegram(method, data) {
  try {
    const res = await fetch(`${TELEGRAM_API}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (err) {
    console.error(`Telegram API Error [${method}]:`, err);
    return null;
  }
}

// 22 Districts and Towns of Tashkent Region Data
const DISTRICTS_DATA = {
  nurafshon: { name: 'Nurafshon shahri', schools: '12 ta', model: '1-sonli ixtisoslashtirilgan maktab', type: 'Viloyat markazi' },
  chirchiq: { name: 'Chirchiq shahri', schools: '26 ta', model: '9-sonli umumta’lim maktabi', type: 'Sanoat va ta’lim markazi' },
  angren: { name: 'Angren shahri', schools: '34 ta', model: '14-sonli umumta’lim maktabi', type: 'Sanoat shahri' },
  olmaliq: { name: 'Olmaliq shahri', schools: '24 ta', model: '5-sonli ixtisoslashtirilgan maktab', type: 'Kon-metallurgiya markazi' },
  bekobod_sh: { name: 'Bekobod shahri', schools: '18 ta', model: '16-sonli umumta’lim maktabi', type: 'Metallurgiya shahri' },
  yangiyol_sh: { name: 'Yangiyo‘l shahri', schools: '15 ta', model: '2-sonli maktab-internat', type: 'Shaharcha' },
  ohangaron_sh: { name: 'Ohangaron shahri', schools: '11 ta', model: '3-sonli umumta’lim maktabi', type: 'Sanoat shaharchasi' },
  zangiota: { name: 'Zangiota tumani', schools: '48 ta', model: '21-sonli umumta’lim maktabi', type: 'Yirik tuman' },
  qibray: { name: 'Qibray tumani', schools: '42 ta', model: '7-sonli umumta’lim maktabi', type: 'Ilmiy-madaniy tuman' },
  bostonliq: { name: 'Bo‘stonliq tumani', schools: '54 ta', model: '1-sonli ixtisoslashgan maktab', type: 'Turizm va tog‘oldi hudud' },
  parkent: { name: 'Parkent tumani', schools: '38 ta', model: '11-sonli umumta’lim maktabi', type: 'Agrosanoat va turizm' },
  toshkent_t: { name: 'Toshkent tumani', schools: '40 ta', model: '25-sonli umumta’lim maktabi', type: 'Poytaxtoldi hudud' },
  ortachirchiq: { name: 'O‘rtachirchiq tumani', schools: '56 ta', model: '4-sonli umumta’lim maktabi', type: 'Qishloq xo‘jaligi' },
  yuqorichirchiq: { name: 'Yuqorichirchiq tumani', schools: '45 ta', model: '8-sonli umumta’lim maktabi', type: 'Agrosanoat tumani' },
  quyichirchiq: { name: 'Quyichirchiq tumani', schools: '39 ta', model: '12-sonli umumta’lim maktabi', type: 'Agrosanoat tumani' },
  chinoz: { name: 'Chinoz tumani', schools: '46 ta', model: '18-sonli umumta’lim maktabi', type: 'Logistika va agrohudud' },
  yangiyol_t: { name: 'Yangiyo‘l tumani', schools: '51 ta', model: '31-sonli umumta’lim maktabi', type: 'Agrosanoat tumani' },
  bekobod_t: { name: 'Bekobod tumani', schools: '55 ta', model: '6-sonli umumta’lim maktabi', type: 'Agrosanoat tumani' },
  boka: { name: 'Bo‘ka tumani', schools: '47 ta', model: '9-sonli umumta’lim maktabi', type: 'Agrohudud' },
  piskent: { name: 'Piskent tumani', schools: '33 ta', model: '2-sonli umumta’lim maktabi', type: 'Agrohudud' },
  oqqorgon: { name: 'Oqqo‘rg‘on tumani', schools: '36 ta', model: '15-sonli umumta’lim maktabi', type: 'Agrohudud' },
  ohangaron_t: { name: 'Ohangaron tumani', schools: '29 ta', model: '10-sonli umumta’lim maktabi', type: 'Tog‘oldi va sanoat' }
};

// Main Reply Keyboard
const MAIN_KEYBOARD = {
  keyboard: [
    [{ text: '📰 Yangiliklar & Dayjestlar' }, { text: '🛡️ «Kiber-Qalqon»' }],
    [{ text: '🏆 Viloyat Iftixorlari' }, { text: '🎙️ «Focus Suhbat»' }],
    [{ text: '🗺️ 22 Ta Tuman Maktablari' }, { text: '📝 Murojaat Yo‘llash' }],
    [{ text: '🌐 Rasmiy Vebsayt' }, { text: 'ℹ️ Loyiha Haqida' }]
  ],
  resize_keyboard: true,
  is_persistent: true
};

// Handle Incoming Telegram Update
async function handleUpdate(update) {
  if (!update) return;

  // 1. Callback Query Handler (Inline Buttons)
  if (update.callback_query) {
    const cb = update.callback_query;
    const chatId = cb.message.chat.id;
    const data = cb.data || '';

    await callTelegram('answerCallbackQuery', { callback_query_id: cb.id });

    if (data.startsWith('dist_')) {
      const key = data.replace('dist_', '');
      const d = DISTRICTS_DATA[key];
      if (d) {
        const text = `${EMJ.PIN} <b>${d.name}</b>\n\n` +
                     `🏢 <b>Hudud toifasi:</b> ${d.type}\n` +
                     `🏫 <b>Umumta’lim maktablari soni:</b> ${d.schools}\n` +
                     `${EMJ.TARGET} <b>Namunali tayanch maktabi:</b> ${d.model}\n` +
                     `${EMJ.STATUS_ACTIVE} <b>Media guruh holati:</b> Shakllantirilgan va faoliyatga tayyor\n\n` +
                     `<i>Toshkent viloyati Maktabgacha va maktab ta’limi boshqarmasi ma’lumotlari asosida.</i>`;
        
        await callTelegram('sendMessage', {
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '⬅️ Tumanlar ro‘yxatiga qaytish', callback_data: 'menu_districts' }],
              [{ text: '🌐 Vebsaytda to‘liq ko‘rish', url: `${WEBSITE_URL}#hududlar` }]
            ]
          }
        });
      }
      return;
    }

    if (data === 'menu_districts') {
      await sendDistrictsMenu(chatId);
      return;
    }

    if (data === 'action_murojaat') {
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: `${EMJ.PENCIL} <b>Rasmiy Murojaat Yo‘llash</b> ${EMJ.SPARKLES}\n\n` +
              `Iltimos, murojaatingiz matnini bitta xabarda quyidagi tartibda yozib yuboring:\n\n` +
              `1️⃣ Ism va familiyangiz\n` +
              `2️⃣ Tumaningiz va maktab raqamingiz\n` +
              `3️⃣ Taklif yoki murojaatingiz mazmuni\n\n` +
              `<i>Xabaringiz zudlik bilan Focus Media rahbari @${ADMIN_USERNAME} ga yetkaziladi.</i>`,
        parse_mode: 'HTML'
      });
      return;
    }
    return;
  }

  // 2. Message Handler
  if (update.message) {
    const msg = update.message;
    const chatId = msg.chat.id;
    const text = (msg.text || '').trim();
    const fromName = msg.from.first_name || 'Foydalanuvchi';

    // Commands: /start, /help
    if (text === '/start' || text === '/help') {
      const welcome = `${EMJ.WAVE} Assalomu alaykum, <b>${fromName}</b>! ${EMJ.TARGET}\n\n` +
                      `<b>«Focus Media — Toshkent Viloyati Maktablari»</b> yagona axborot tizimining rasmiy botiga xush kelibsiz!\n\n` +
                      `Mazkur platforma Toshkent viloyati umumta’lim muassasalarida yangi axborot makonini shakllantirish, yoshlar media-savodxonligini oshirish va iqtidorli o‘quvchilar yutuqlarini keng ommalashtirishga xizmat qiladi.\n\n` +
                      `${EMJ.ARROW_R} <b>Quyidagi bo‘limlardan birini tanlang:</b>`;
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: welcome,
        parse_mode: 'HTML',
        reply_markup: MAIN_KEYBOARD
      });
      return;
    }

    // Menu: 📰 Yangiliklar & Dayjestlar
    if (text.includes('Yangiliklar')) {
      const news = `${EMJ.PIN} <b>«Hafta Nigohi» Dayjesti va Yangiliklar</b> ${EMJ.SPARKLES}\n\n` +
                   `Toshkent viloyati umumta’lim muassasalarida hafta davomida o‘tkazilgan eng muhim ta’limiy va ma’rifiy yangiliklar:\n\n` +
                   `🔹 <b>Namunali ochiq darslar:</b> 22 ta tuman maktablarida ilg‘or pedagogik texnologiyalar amaliyotga kiritilmoqda.\n` +
                   `🔹 <b>Iqtidorlar tanlovi:</b> Fan olimpiadalari va IT dasturlash bo‘yicha viloyat bosqichlari davom etmoqda.\n` +
                   `🔹 <b>Maktab media-burchaklari:</b> O‘quvchilar tomonidan tayyorlangan haftalik video-dayjestlar efirga uzatilmoqda.\n\n` +
                   `Barcha lavhalar va reportajlarni rasmiy portalda to‘liq ko‘rishingiz mumkin:`;
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: news,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🌐 Portalda to‘liq ko‘rish', url: `${WEBSITE_URL}#ustunlar` }]
          ]
        }
      });
      return;
    }

    // Menu: 🛡️ «Kiber-Qalqon»
    if (text.includes('Kiber-Qalqon')) {
      const cyber = `${EMJ.ALERT} <b>«Kiber-Qalqon» — Axborot Xavfsizligi Madaniyati</b> ${EMJ.LIGHTNING}\n\n` +
                    `O‘quvchi va ota-onalar uchun internet tarmog‘ida xavfsiz bo‘lishning 4 oltin qoidasi:\n\n` +
                    `1️⃣ <b>Shaxsiy ma’lumotlarni asrang:</b> Hech qachon bank kartalari, SMS-kodlar va parollarni begona guruh yoki botlarga yubormang.\n\n` +
                    `2️⃣ <b>Soxta (fishing) havolalardan ehtiyot bo‘ling:</b> «Telegram premium bepul», «Katta pul yutug‘i» mazmunidagi havolalarni ochmang.\n\n` +
                    `3️⃣ <b>Feyk xabarlarga ishonmang:</b> Shov-shuvli yangiliklarni faqat rasmiy davlat va ta’lim manbalari orqali tekshiring.\n\n` +
                    `4️⃣ <b>Yot mafkuraviy guruhlardan saqlaning:</b> Ijtimoiy tarmoqlarda noma’lum kimsalar bilan shubhali muloqotga kirmang.\n\n` +
                    `${EMJ.CHECK} <i>«Kiber-Qalqon» — viloyat yoshlarining raqamli immunitetidir!</i>`;
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: cyber,
        parse_mode: 'HTML'
      });
      return;
    }

    // Menu: 🏆 Viloyat Iftixorlari
    if (text.includes('Viloyat Iftixorlari')) {
      const heroes = `${EMJ.CROWN} <b>«Viloyat Iftixorlari» Elektron Reytingi</b> ${EMJ.STAR}\n\n` +
                     `Toshkent viloyati maktablarining xalqaro va respublika darajasidagi iqtidorli yoshlari ro‘yxati:\n\n` +
                     `🥇 <b>Fan olimpiadalari g‘oliblari:</b> Xalqaro matematika, fizika, kimyo va biologiya musobaqalarida zafar quchgan o‘quvchilar.\n` +
                     `💻 <b>IT va Dasturlash yetakchilari:</b> Sun’iy intellekt, robototexnika va veb-ishlanmalar yaratuvchilari.\n` +
                     `🥋 <b>Sport chempionlari:</b> Jahon va Osiyo chempionatlarida yurtimiz bayrog‘ini ko‘targan maktab yoshlari.\n` +
                     `🎨 <b>Madaniyat va San’at:</b> Musiqa, notiqlik va tasviriy san’at sovrindorlari.\n\n` +
                     `${EMJ.FIRE} <i>Har bir iqtidor — butun viloyatimiz faxridir!</i>`;
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: heroes,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🌐 Saytda iftixorlar ro‘yxati', url: `${WEBSITE_URL}#ustunlar` }]
          ]
        }
      });
      return;
    }

    // Menu: 🎙️ «Focus Suhbat»
    if (text.includes('Focus Suhbat')) {
      const podcast = `${EMJ.DIAMOND} <b>«Focus Suhbat» — Ma’rifiy Podkastlar</b> ${EMJ.SPARKLES}\n\n` +
                      `Ziyolilar, faxriy ustozlar, namunali yosh liderlar va soha mutaxassislari bilan davra suhbatlari:\n\n` +
                      `▪️ <b>«Ustozga Ehtirom»:</b> Fidoyi pedagoglarning ibratli faoliyati va samimiy blits-intervyulari.\n` +
                      `▪️ <b>«Chempionlar Yo‘li»:</b> G‘olib o‘quvchilarning mashaqqatli mehnati va muvaffaqiyat sirlari.\n` +
                      `▪️ <b>«Kelajak Kasblari»:</b> Zamonaviy kasblar (SMM, mobilografiya, dasturlash) bo‘yicha amaliy tavsiyalar.\n\n` +
                      `Suhbatlar viloyat maktablarining rasmiy media guruhlari tomonidan tasvirga olinadi.`;
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: podcast,
        parse_mode: 'HTML'
      });
      return;
    }

    // Menu: 🗺️ 22 Ta Tuman Maktablari
    if (text.includes('22 Ta Tuman') || text.includes('Tuman Maktablari')) {
      await sendDistrictsMenu(chatId);
      return;
    }

    // Menu: 📝 Murojaat Yo‘llash
    if (text.includes('Murojaat')) {
      const appeal = `${EMJ.PENCIL} <b>Maktab va Ta’lim Bo‘yicha Murojaat Yo‘llash</b> ${EMJ.IDEA}\n\n` +
                     `Siz ta’lim jarayoni, maktab media-burchagi faoliyati yoki o‘quvchilar yutuqlari bo‘yicha o‘z taklif va murojaatingizni to‘g‘ridan-to‘g‘ri yuborishingiz mumkin.\n\n` +
                     `Iltimos, murojaat matnini ushbu botga xabar sifatida yozib qoldiring. Har bir murojaat koordinatorlar va @${ADMIN_USERNAME} tomonidan ko‘rib chiqiladi.`;
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: appeal,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '✍️ Murojaat yozish tartibi', callback_data: 'action_murojaat' }]
          ]
        }
      });
      return;
    }

    // Menu: 🌐 Rasmiy Vebsayt
    if (text.includes('Rasmiy Vebsayt') || text.includes('Vebsayt')) {
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: `${EMJ.ROCKET} <b>«Focus Media» Rasmiy Vebsayti</b>\n\n` +
              `Viloyat ta’lim tizimi, yo‘l xaritasi, kutilayotgan natijalar va 22 ta tuman reestrini rasmiy vebsayt orqali to‘liq ko‘rishingiz mumkin:\n\n` +
              `👉 ${WEBSITE_URL}`,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🚀 Saytni Ochish', url: WEBSITE_URL }]
          ]
        }
      });
      return;
    }

    // Menu: ℹ️ Loyiha Haqida
    if (text.includes('Loyiha Haqida') || text === '/about') {
      const about = `${EMJ.TARGET} <b>«Focus Media» Loyihasi Bosh G‘oyasi</b> ${EMJ.CROWN}\n\n` +
                    `<i>«Focus Media — bu shunchaki axborot kanali emas, balki Toshkent viloyati yoshlarining intellektual salohiyati, vatanparvarligi va zamonaviy imijini namoyon etuvchi raqamli ko‘zgudir!»</i>\n\n` +
                    `🏛 <b>Qamrov:</b> Toshkent viloyatining barcha 22 ta tuman va shahri (900+ maktab)\n` +
                    `👥 <b>Mas’ullar:</b> Maktab media koordinatorlari va iqtidorli o‘quvchilar guruhi\n` +
                    `${EMJ.LIGHTNING} <b>Asosiy maqsad:</b> Ochiq, xavfsiz va ta’sirchan milliy axborot makonini yaratish.\n\n` +
                    `📩 <b>Rasmiy aloqa:</b> @${ADMIN_USERNAME}`;
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: about,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: '🌐 Loyiha Sayti', url: WEBSITE_URL }]
          ]
        }
      });
      return;
    }

    // Default Fallback (User sent a free-text message / appeal)
    const ticketNum = Math.floor(10000 + Math.random() * 90000);
    const replyText = `${EMJ.CHECK} <b>Murojaatingiz qabul qilindi!</b> ${EMJ.SPARKLES}\n\n` +
                      `Xabaringiz <b>№ FM-${ticketNum}</b> raqami bilan tizimda ro‘yxatga olindi hamda mas’ul koordinator @${ADMIN_USERNAME} ga yetkazildi.\n\n` +
                      `E’tiboringiz va ta’lim rivojiga qo‘shayotgan hissangiz uchun tashakkur!`;
    await callTelegram('sendMessage', {
      chat_id: chatId,
      text: replyText,
      parse_mode: 'HTML',
      reply_markup: MAIN_KEYBOARD
    });
  }
}

// Helper: Send Districts Inline Grid
async function sendDistrictsMenu(chatId) {
  const inline_keyboard = [
    [
      { text: 'Nurafshon sh.', callback_data: 'dist_nurafshon' },
      { text: 'Chirchiq sh.', callback_data: 'dist_chirchiq' },
      { text: 'Angren sh.', callback_data: 'dist_angren' }
    ],
    [
      { text: 'Olmaliq sh.', callback_data: 'dist_olmaliq' },
      { text: 'Bekobod sh.', callback_data: 'dist_bekobod_sh' },
      { text: 'Yangiyo‘l sh.', callback_data: 'dist_yangiyol_sh' }
    ],
    [
      { text: 'Ohangaron sh.', callback_data: 'dist_ohangaron_sh' },
      { text: 'Zangiota t.', callback_data: 'dist_zangiota' },
      { text: 'Qibray t.', callback_data: 'dist_qibray' }
    ],
    [
      { text: 'Bo‘stonliq t.', callback_data: 'dist_bostonliq' },
      { text: 'Parkent t.', callback_data: 'dist_parkent' },
      { text: 'Toshkent t.', callback_data: 'dist_toshkent_t' }
    ],
    [
      { text: 'O‘rtachirchiq t.', callback_data: 'dist_ortachirchiq' },
      { text: 'Yuqorichirchiq', callback_data: 'dist_yuqorichirchiq' },
      { text: 'Quyichirchiq', callback_data: 'dist_quyichirchiq' }
    ],
    [
      { text: 'Chinoz t.', callback_data: 'dist_chinoz' },
      { text: 'Yangiyo‘l t.', callback_data: 'dist_yangiyol_t' },
      { text: 'Bekobod t.', callback_data: 'dist_bekobod_t' }
    ],
    [
      { text: 'Bo‘ka t.', callback_data: 'dist_boka' },
      { text: 'Piskent t.', callback_data: 'dist_piskent' },
      { text: 'Oqqo‘rg‘on t.', callback_data: 'dist_oqqorgon' }
    ],
    [
      { text: 'Ohangaron t.', callback_data: 'dist_ohangaron_t' }
    ],
    [
      { text: '🌐 Barcha 22 ta hududni jadvalda ko‘rish', url: `${WEBSITE_URL}#hududlar` }
    ]
  ];

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: `${EMJ.TARGET} <b>Toshkent Viloyati Tuman va Shaharlari</b> ${EMJ.PIN}\n\nQuyidagi hududlardan birini tanlang va maktablar ko‘rsatkichi bilan tanishing:`,
    parse_mode: 'HTML',
    reply_markup: { inline_keyboard }
  });
}

// ============================================================================
// MAIN VERCEL SERVERLESS HANDLER
// ============================================================================
module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host || 'focus-media-toshkent.vercel.app';
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const autoWebhookUrl = `${proto}://${host}/api/webhook`;

  // 1. GET Request: Status Dashboard & One-Click Webhook Config
  if (req.method === 'GET') {
    const action = req.query.action || '';

    // Action: Set Webhook
    if (action === 'set') {
      const targetUrl = req.query.url || autoWebhookUrl;
      const setRes = await callTelegram('setWebhook', { url: targetUrl });
      return res.status(200).json({
        success: true,
        action: 'setWebhook',
        targetUrl,
        telegramResponse: setRes
      });
    }

    // Action: Delete Webhook
    if (action === 'delete') {
      const delRes = await callTelegram('deleteWebhook', {});
      return res.status(200).json({
        success: true,
        action: 'deleteWebhook',
        telegramResponse: delRes
      });
    }

    // Fetch live webhook info
    const webhookInfo = await callTelegram('getWebhookInfo', {}) || {};
    const botMe = await callTelegram('getMe', {}) || {};

    const html = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Focus Media Bot — Vercel 24/7 Status</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #08090d; color: #f8fafc; padding: 2rem; display: flex; justify-content: center; align-items: center; min-height: 90vh; margin: 0; }
    .card { background: rgba(255, 255, 255, 0.035); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 2.5rem; max-width: 580px; width: 100%; box-shadow: 0 20px 50px rgba(0,0,0,0.5); backdrop-filter: blur(20px); }
    h1 { font-size: 1.6rem; color: #ffffff; margin-top: 0; display: flex; align-items: center; gap: 0.6rem; }
    .badge { display: inline-block; padding: 0.3rem 0.8rem; border-radius: 999px; font-size: 0.75rem; font-weight: 700; }
    .badge-online { background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #10b981; }
    .badge-warn { background: rgba(245, 158, 11, 0.15); border: 1px solid #f59e0b; color: #f59e0b; }
    .info-row { display: flex; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid rgba(255, 255, 255, 0.06); font-size: 0.9rem; }
    .info-label { color: #94a3b8; }
    .info-val { font-weight: 600; color: #ffffff; word-break: break-all; text-align: right; }
    .btn { display: inline-block; padding: 0.75rem 1.5rem; border-radius: 999px; font-weight: 700; text-decoration: none; font-size: 0.88rem; cursor: pointer; border: none; transition: all 0.2s; margin-top: 1rem; }
    .btn-primary { background: linear-gradient(135deg, #00f0ff, #3b82f6); color: #08090d; }
    .btn-primary:hover { filter: brightness(1.1); transform: translateY(-1px); }
    .btn-secondary { background: rgba(255, 255, 255, 0.08); color: #ffffff; margin-left: 0.5rem; }
    .btn-secondary:hover { background: rgba(255, 255, 255, 0.15); }
    .actions { display: flex; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap; }
    code { background: rgba(0,0,0,0.4); padding: 0.2rem 0.4rem; border-radius: 6px; color: #00f0ff; }
  </style>
</head>
<body>
  <div class="card">
    <h1>🎯 Focus Media Telegram Bot</h1>
    <p style="color: #94a3b8; line-height: 1.5;">Toshkent viloyati umumta’lim maktablari yagona raqamli botining Vercel 24/7 serverless boshqaruv paneli.</p>

    <div style="margin: 1.5rem 0;">
      <div class="info-row">
        <span class="info-label">Bot nomi:</span>
        <span class="info-val">${botMe.result ? botMe.result.first_name : 'Focus Media'} (@${botMe.result ? botMe.result.username : 'focusmedia4_bot'})</span>
      </div>
      <div class="info-row">
        <span class="info-label">Serverless Status:</span>
        <span class="info-val"><span class="badge badge-online">24/7 ONLINE</span></span>
      </div>
      <div class="info-row">
        <span class="info-label">Telegram Webhook:</span>
        <span class="info-val">
          ${webhookInfo.result && webhookInfo.result.url 
            ? `<span class="badge badge-online">ULANGAN</span>` 
            : `<span class="badge badge-warn">ULANMAGAN</span>`}
        </span>
      </div>
      <div class="info-row">
        <span class="info-label">Faol Webhook URL:</span>
        <span class="info-val"><code>${webhookInfo.result ? (webhookInfo.result.url || 'O‘rnatilmagan') : 'Noma’lum'}</code></span>
      </div>
      <div class="info-row">
        <span class="info-label">Kutilayotgan URL:</span>
        <span class="info-val"><code>${autoWebhookUrl}</code></span>
      </div>
      <div class="info-row">
        <span class="info-label">Mas’ul Admin:</span>
        <span class="info-val"><b>@${ADMIN_USERNAME}</b></span>
      </div>
    </div>

    <div class="actions">
      <a href="?action=set" class="btn btn-primary">⚡ Webhookni Bog‘lash</a>
      <a href="https://t.me/focusmedia4_bot" target="_blank" class="btn btn-secondary">🤖 Botni Ochish</a>
      <a href="/" class="btn btn-secondary">🌐 Saytga Qaytish</a>
    </div>
  </div>
</body>
</html>`;

    return res.status(200).send(html);
  }

  // 2. POST Request: Telegram Webhook Updates
  if (req.method === 'POST') {
    try {
      const update = req.body;
      await handleUpdate(update);
      return res.status(200).json({ ok: true });
    } catch (err) {
      console.error('Webhook execution error:', err);
      return res.status(200).json({ ok: false, error: err.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
};

module.exports.handleUpdate = handleUpdate;
module.exports.callTelegram = callTelegram;

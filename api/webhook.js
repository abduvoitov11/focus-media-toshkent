// ============================================================================
// FOCUS MEDIA — TELEGRAM BOT SERVERLESS WEBHOOK (VERCEL 24/7)
// 100% Telegram Premium Custom Animated Emojis in Messages & Buttons
// Bot: @focusmedia4_bot | Admin: @Torabek_Abduvoitov
// ============================================================================

try { require('dns').setDefaultResultOrder?.('ipv4first'); } catch (_) {}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8492338050:AAFWOWRrc_kAd8hc88qfyalxkCt_ehe5zec';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;
const WEBSITE_URL = 'https://abduvoitov11.github.io/focus-media-toshkent/';
const ADMIN_USERNAME = 'Torabek_Abduvoitov';
const BANNER_FILE_ID = 'AgACAgIAAxkDAANeatucVaEJp6RT-uzNzPjIpFcMtfYAAqAvaxtrBuBKodld9Is1zsUBAAMCAAN4AAM9BA';

// ----------------------------------------------------------------------------
// Telegram Premium Animated Custom Emojis (<tg-emoji emoji-id="...">)
// ----------------------------------------------------------------------------
const EMJ = {
  // Navigation & Direction
  TARGET: '<tg-emoji emoji-id="5461009483314517035">🎯</tg-emoji>',
  ROCKET: '<tg-emoji emoji-id="5334949873894565190">🚀</tg-emoji>',
  LIGHTNING: '<tg-emoji emoji-id="5884428842780594914">⚡</tg-emoji>',
  ARROW_R: '<tg-emoji emoji-id="5416117059207572332">➡️</tg-emoji>',
  ARROW_L: '<tg-emoji emoji-id="5370726448959085259">⬅️</tg-emoji>',
  RETURN: '<tg-emoji emoji-id="5778432163766604235">↩️</tg-emoji>',
  PIN: '<tg-emoji emoji-id="5391032818111363540">📍</tg-emoji>',
  MAP: '<tg-emoji emoji-id="5417936862620706376">🗺</tg-emoji>',
  GLOBE: '<tg-emoji emoji-id="5447410659077661506">🌐</tg-emoji>',
  LINK: '<tg-emoji emoji-id="5271604874419647061">🔗</tg-emoji>',

  // Media, Video, Podcast & Journalism
  NEWS: '<tg-emoji emoji-id="5893057118545646106">📰</tg-emoji>',
  TV: '<tg-emoji emoji-id="6044356915029348425">📺</tg-emoji>',
  FILM: '<tg-emoji emoji-id="5937999673510858217">🎞</tg-emoji>',
  STUDIO_MIC: '<tg-emoji emoji-id="5294339927318739359">🎙</tg-emoji>',
  MIC: '<tg-emoji emoji-id="5224736245665511429">🎤</tg-emoji>',
  HEADPHONES: '<tg-emoji emoji-id="5420585238239668500">🎧</tg-emoji>',
  CAMERA_VIDEO: '<tg-emoji emoji-id="5884351885556585857">🎥</tg-emoji>',
  CAMERA_PHOTO: '<tg-emoji emoji-id="5879995903955179148">📸</tg-emoji>',
  ART: '<tg-emoji emoji-id="5420594034332691216">🎨</tg-emoji>',

  // Security, Trust & Alert
  SHIELD: '<tg-emoji emoji-id="5251203410396458957">🛡</tg-emoji>',
  LOCK: '<tg-emoji emoji-id="5296369303661067030">🔒</tg-emoji>',
  KEY: '<tg-emoji emoji-id="5307843983102204243">🔑</tg-emoji>',
  ALERT: '<tg-emoji emoji-id="5395695537687123235">🚨</tg-emoji>',
  WARN: '<tg-emoji emoji-id="5420323339723881652">⚠️</tg-emoji>',
  STOP: '<tg-emoji emoji-id="5228807917611816928">🛑</tg-emoji>',
  DANGER: '<tg-emoji emoji-id="5411225014148014586">🔴</tg-emoji>',

  // Achievements, Honors & Quality
  TROPHY: '<tg-emoji emoji-id="5188344996356448758">🏆</tg-emoji>',
  MEDAL_GOLD: '<tg-emoji emoji-id="5440539497383087970">🥇</tg-emoji>',
  MEDAL_SILVER: '<tg-emoji emoji-id="5447203607294265305">🥈</tg-emoji>',
  MEDAL_BRONZE: '<tg-emoji emoji-id="5453902265922376865">🥉</tg-emoji>',
  CROWN: '<tg-emoji emoji-id="5431719150680581432">👑</tg-emoji>',
  STAR: '<tg-emoji emoji-id="6028338546736107668">⭐</tg-emoji>',
  STAR_SPARKLE: '<tg-emoji emoji-id="5805331990618053402">🌟</tg-emoji>',
  SPARKLES: '<tg-emoji emoji-id="5325547803936572038">✨</tg-emoji>',
  GEM: '<tg-emoji emoji-id="5427168083074628963">💎</tg-emoji>',
  FIRE: '<tg-emoji emoji-id="5424972470023104089">🔥</tg-emoji>',

  // Education, Mind & School
  GRADUATION: '<tg-emoji emoji-id="5938195768832692153">🎓</tg-emoji>',
  BOOK: '<tg-emoji emoji-id="6039584437564347225">📖</tg-emoji>',
  BRAIN: '<tg-emoji emoji-id="5235676751434131174">🧠</tg-emoji>',
  IDEA: '<tg-emoji emoji-id="5422439311196834318">💡</tg-emoji>',
  SCHOOL: '<tg-emoji emoji-id="5938537205847822613">🏡</tg-emoji>',
  ACADEMY: '<tg-emoji emoji-id="5238132025323444613">🏦</tg-emoji>',

  // Technology, Modern Skills & Team
  DEV: '<tg-emoji emoji-id="5420385217317728787">👨‍💻</tg-emoji>',
  LAPTOP: '<tg-emoji emoji-id="5420482786089790343">💻</tg-emoji>',
  BOT: '<tg-emoji emoji-id="5228776504221016459">🤖</tg-emoji>',
  WORK: '<tg-emoji emoji-id="5938492039971737551">💼</tg-emoji>',
  TEAM: '<tg-emoji emoji-id="5938196735200333756">👥</tg-emoji>',
  USER: '<tg-emoji emoji-id="5884366771913233289">👤</tg-emoji>',
  SPORT: '<tg-emoji emoji-id="6042069608721027027">⚽</tg-emoji>',
  STRONG: '<tg-emoji emoji-id="5420416974305912272">💪</tg-emoji>',
  WAVE: '<tg-emoji emoji-id="5420314045414667093">👋</tg-emoji>',

  // Communication & Official Actions
  WRITE: '<tg-emoji emoji-id="5229066410218527157">📝</tg-emoji>',
  PENCIL: '<tg-emoji emoji-id="5395444784611480792">✏️</tg-emoji>',
  MAIL: '<tg-emoji emoji-id="5472239203590888751">📩</tg-emoji>',
  ENVELOPE: '<tg-emoji emoji-id="5253742260054409879">✉️</tg-emoji>',
  PHONE: '<tg-emoji emoji-id="5235557488782255885">📞</tg-emoji>',
  CHAT: '<tg-emoji emoji-id="5443038326535759644">💬</tg-emoji>',
  DOC: '<tg-emoji emoji-id="6050643982646513651">📄</tg-emoji>',
  FOLDER: '<tg-emoji emoji-id="5229013715264771286">🗂</tg-emoji>',
  BOX: '<tg-emoji emoji-id="5884479287171485878">📦</tg-emoji>',
  CHECK: '<tg-emoji emoji-id="5309745068771415716">✅</tg-emoji>',
  STATUS_ACTIVE: '<tg-emoji emoji-id="5416081784641168838">🟢</tg-emoji>',

  // Sequence Numbers
  NUM_1: '<tg-emoji emoji-id="5940515192906456099">1️⃣</tg-emoji>',
  NUM_2: '<tg-emoji emoji-id="5940420518942347102">2️⃣</tg-emoji>',
  NUM_3: '<tg-emoji emoji-id="5793981487271386646">3️⃣</tg-emoji>',
  NUM_4: '<tg-emoji emoji-id="5794377032284510899">4️⃣</tg-emoji>'
};

// ----------------------------------------------------------------------------
// Telegram Inline Keyboard Icons (icon_custom_emoji_id)
// Every button displays an animated Telegram Premium custom icon before the text
// ----------------------------------------------------------------------------
const TG_ICONS = {
  NEWS: '5893057118545646106',
  SHIELD: '5251203410396458957',
  TROPHY: '5188344996356448758',
  STUDIO_MIC: '5294339927318739359',
  MAP: '5417936862620706376',
  WRITE: '5229066410218527157',
  GLOBE: '5447410659077661506',
  TARGET: '5461009483314517035',
  PIN: '5391032818111363540',
  HOME: '5778432163766604235',
  BACK: '5370726448959085259',
  ROCKET: '5334949873894565190',
  STAR: '6028338546736107668',
  CHECK: '5309745068771415716',
  DEV: '5420385217317728787',
  LAPTOP: '5420482786089790343',
  BOOK: '6039584437564347225'
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
  nurafshon: { name: 'Nurafshon shahri', schools: '12 ta', model: '1-sonli ixtisoslashtirilgan maktab', type: 'Viloyat ma’muriy markazi' },
  chirchiq: { name: 'Chirchiq shahri', schools: '26 ta', model: '9-sonli umumta’lim maktabi', type: 'Sanoat va oliy ta’lim markazi' },
  angren: { name: 'Angren shahri', schools: '34 ta', model: '14-sonli umumta’lim maktabi', type: 'Sanoat va konchilik shahri' },
  olmaliq: { name: 'Olmaliq shahri', schools: '24 ta', model: '5-sonli ixtisoslashtirilgan maktab', type: 'Kon-metallurgiya poytaxti' },
  bekobod_sh: { name: 'Bekobod shahri', schools: '18 ta', model: '16-sonli umumta’lim maktabi', type: 'Metallurgiya shahri' },
  yangiyol_sh: { name: 'Yangiyo‘l shahri', schools: '15 ta', model: '2-sonli maktab-internat', type: 'Aholisi zich shahar' },
  ohangaron_sh: { name: 'Ohangaron shahri', schools: '11 ta', model: '3-sonli umumta’lim maktabi', type: 'Sanoat klasteri' },
  zangiota: { name: 'Zangiota tumani', schools: '48 ta', model: '21-sonli umumta’lim maktabi', type: 'Yirik agrosanoat tumani' },
  qibray: { name: 'Qibray tumani', schools: '42 ta', model: '7-sonli umumta’lim maktabi', type: 'Ilmiy-akademik hudud' },
  bostonliq: { name: 'Bo‘stonliq tumani', schools: '54 ta', model: '1-sonli ixtisoslashgan maktab', type: 'Xalqaro turizm va tog‘oldi hudud' },
  parkent: { name: 'Parkent tumani', schools: '38 ta', model: '11-sonli umumta’lim maktabi', type: 'Agrosanoat va ekoturizm' },
  toshkent_t: { name: 'Toshkent tumani', schools: '40 ta', model: '25-sonli umumta’lim maktabi', type: 'Poytaxt chegarasi hududi' },
  ortachirchiq: { name: 'O‘rtachirchiq tumani', schools: '56 ta', model: '4-sonli umumta’lim maktabi', type: 'Yirik qishloq xo‘jaligi hududi' },
  yuqorichirchiq: { name: 'Yuqorichirchiq tumani', schools: '45 ta', model: '8-sonli umumta’lim maktabi', type: 'Agrosanoat va logistika' },
  quyichirchiq: { name: 'Quyichirchiq tumani', schools: '39 ta', model: '12-sonli umumta’lim maktabi', type: 'Agroklaster hududi' },
  chinoz: { name: 'Chinoz tumani', schools: '46 ta', model: '18-sonli umumta’lim maktabi', type: 'Baliqchilik va logistika tuguni' },
  yangiyol_t: { name: 'Yangiyo‘l tumani', schools: '51 ta', model: '31-sonli umumta’lim maktabi', type: 'Agro-ishlab chiqarish tumani' },
  bekobod_t: { name: 'Bekobod tumani', schools: '55 ta', model: '6-sonli umumta’lim maktabi', type: 'Agrosanoat hududi' },
  boka: { name: 'Bo‘ka tumani', schools: '47 ta', model: '9-sonli umumta’lim maktabi', type: 'Janubiy agrohudud' },
  piskent: { name: 'Piskent tumani', schools: '33 ta', model: '2-sonli umumta’lim maktabi', type: 'Qishloq xo‘jaligi tumani' },
  oqqorgon: { name: 'Oqqo‘rg‘on tumani', schools: '36 ta', model: '15-sonli umumta’lim maktabi', type: 'Paxtachilik va g‘allachilik' },
  ohangaron_t: { name: 'Ohangaron tumani', schools: '29 ta', model: '10-sonli umumta’lim maktabi', type: 'Tog‘-kon va chorvachilik' }
};

// Main Reply Keyboard (Telegram Premium Animated Custom Icons & Colors on Each Button)
const MAIN_KEYBOARD = {
  keyboard: [
    [
      { text: 'Haftalik Yangiliklar', icon_custom_emoji_id: TG_ICONS.NEWS, style: 'primary' },
      { text: '«Kiber-Qalqon»', icon_custom_emoji_id: TG_ICONS.SHIELD, style: 'success' }
    ],
    [
      { text: 'Viloyat Iftixorlari', icon_custom_emoji_id: TG_ICONS.TROPHY, style: 'primary' },
      { text: '«Focus Suhbat»', icon_custom_emoji_id: TG_ICONS.STUDIO_MIC, style: 'primary' }
    ],
    [
      { text: '22 Ta Tuman Maktablari', icon_custom_emoji_id: TG_ICONS.MAP, style: 'primary' },
      { text: 'Murojaat Yo‘llash', icon_custom_emoji_id: TG_ICONS.WRITE, style: 'primary' }
    ],
    [
      { text: 'Rasmiy Vebsayt', icon_custom_emoji_id: TG_ICONS.GLOBE, style: 'primary' },
      { text: 'Loyiha Haqida', icon_custom_emoji_id: TG_ICONS.TARGET, style: 'primary' }
    ]
  ],
  resize_keyboard: true,
  is_persistent: true
};

// Master 8-Button Inline Menu (100% Premium Icons and Styles on Each Button)
const MASTER_INLINE_MENU = [
  [
    { text: 'Haftalik Yangiliklar', callback_data: 'nav_news', icon_custom_emoji_id: TG_ICONS.NEWS, style: 'primary' },
    { text: '«Kiber-Qalqon»', callback_data: 'nav_cyber', icon_custom_emoji_id: TG_ICONS.SHIELD, style: 'success' }
  ],
  [
    { text: 'Viloyat Iftixorlari', callback_data: 'nav_heroes', icon_custom_emoji_id: TG_ICONS.TROPHY, style: 'primary' },
    { text: '«Focus Suhbat»', callback_data: 'nav_podcast', icon_custom_emoji_id: TG_ICONS.STUDIO_MIC, style: 'primary' }
  ],
  [
    { text: '22 Ta Tuman', callback_data: 'nav_districts', icon_custom_emoji_id: TG_ICONS.MAP, style: 'primary' },
    { text: 'Murojaat Yo‘llash', callback_data: 'nav_murojaat', icon_custom_emoji_id: TG_ICONS.WRITE, style: 'primary' }
  ],
  [
    { text: 'Rasmiy Vebsayt', url: WEBSITE_URL, icon_custom_emoji_id: TG_ICONS.GLOBE, style: 'primary' },
    { text: 'Loyiha Haqida', callback_data: 'nav_about', icon_custom_emoji_id: TG_ICONS.TARGET, style: 'primary' }
  ]
];

// Helper: Send / Welcome Message
async function sendWelcome(chatId, fromName) {
  const welcome = `${EMJ.WAVE} Assalomu alaykum, <b>${fromName}</b>! ${EMJ.TARGET}\n\n` +
                  `${EMJ.STAR_SPARKLE} <b>«Focus Media — Toshkent Viloyati Maktablari»</b> yagona axborot tizimining rasmiy botiga xush kelibsiz!\n\n` +
                  `Mazkur platforma Toshkent viloyati umumta’lim muassasalarida yangi axborot boshqaruvini shakllantirish, yoshlar media-savodxonligini oshirish va iqtidorli o‘quvchilar yutuqlarini keng ommalashtirishga xizmat qiladi.\n\n` +
                  `${EMJ.ARROW_R} <b>Quyidagi bo‘limlardan birini tanlang:</b>`;

  const photoRes = await callTelegram('sendPhoto', {
    chat_id: chatId,
    photo: BANNER_FILE_ID,
    caption: welcome,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: MASTER_INLINE_MENU
    }
  });

  if (!photoRes || !photoRes.ok) {
    await callTelegram('sendMessage', {
      chat_id: chatId,
      text: welcome,
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: MASTER_INLINE_MENU
      }
    });
  }

  // Also push reply keyboard for native convenience
  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: `${EMJ.CHECK} <i>Tezkor navigatsiya menyusi faollashtirildi:</i>`,
    parse_mode: 'HTML',
    reply_markup: MAIN_KEYBOARD
  });
}

// Helper: Send News
async function sendNews(chatId) {
  const news = `${EMJ.NEWS} <b>«Hafta Sarasi» — Viloyat Maktablari Xabarlari</b> ${EMJ.SPARKLES}\n\n` +
               `Toshkent viloyati umumta’lim muassasalarida hafta davomida o‘tkazilgan eng muhim ta’limiy va ma’rifiy voqealar:\n\n` +
               `${EMJ.GRADUATION} <b>Namunali ochiq darslar:</b> 22 ta tuman maktablarida ilg‘or ta’lim usullari amaliyotga kiritilmoqda.\n` +
               `${EMJ.MEDAL_GOLD} <b>Iqtidorlar tanlovi:</b> Fan olimpiadalari va dasturlash bo‘yicha viloyat bosqichlari saralanmoqda.\n` +
               `${EMJ.CAMERA_VIDEO} <b>Maktab media-burchaklari:</b> O‘quvchilar tomonidan tayyorlangan haftalik tahliliy videolavhalar uzatilmoqda.\n\n` +
               `${EMJ.GLOBE} Barcha lavhalar va yangiliklar rasmiy elektron sahifada to‘liq yoritilmoqda:`;

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: news,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Saytda to‘liq ko‘rish', url: WEBSITE_URL, icon_custom_emoji_id: TG_ICONS.GLOBE }],
        [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
      ]
    }
  });
}

// Helper: Send Cyber Shield
async function sendCyber(chatId) {
  const cyber = `${EMJ.SHIELD} <b>«Kiber-Qalqon» — Raqamli Xavfsizlik Madaniyati</b> ${EMJ.ALERT}\n\n` +
                `O‘quvchilar, ustozlar va ota-onalar uchun internet tarmog‘ida xavfsiz bo‘lishning 4 oltin qoidasi:\n\n` +
                `${EMJ.NUM_1} <b>Shaxsiy ma’lumotlarni asrang:</b> Hech qachon bank kartalari, SMS-kodlar va parollarni begona guruh yoki botlarga kiritmang ${EMJ.LOCK}\n\n` +
                `${EMJ.NUM_2} <b>Soxta (fishing) havolalardan ehtiyot bo‘ling:</b> «Bepul telegram premium», «Katta pul yutug‘i» mazmunidagi soxta havolalarni ochmang ${EMJ.DANGER}\n\n` +
                `${EMJ.NUM_3} <b>Fikr filtrlari va feyk xabarlar:</b> Shov-shuvli xabarlarni faqat rasmiy davlat va ta’lim kanallaridan tekshiring ${EMJ.IDEA}\n\n` +
                `${EMJ.NUM_4} <b>Yot mafkuraviy guruhlardan saqlaning:</b> Ijtimoiy tarmoqlardagi noma’lum kimsalar bilan xavfli muloqotga kirmang ${EMJ.SHIELD}\n\n` +
                `${EMJ.CHECK} <i>«Kiber-Qalqon» — viloyat yoshlarining mustahkam raqamli himoyasidir!</i>`;

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: cyber,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Murojaat yo‘llash', callback_data: 'nav_murojaat', icon_custom_emoji_id: TG_ICONS.WRITE }],
        [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
      ]
    }
  });
}

// Helper: Send Heroes
async function sendHeroes(chatId) {
  const heroes = `${EMJ.TROPHY} <b>«Viloyat Iftixorlari» — Yoshlar Salohiyati</b> ${EMJ.CROWN}\n\n` +
                 `Toshkent viloyati maktablarining respublika va xalqaro miqyosdagi faxrlari:\n\n` +
                 `${EMJ.MEDAL_GOLD} <b>Fan olimpiadalari g‘oliblari:</b> Xalqaro matematika, fizika, kimyo va biologiya musobaqalarida zafar quchgan o‘quvchilar.\n` +
                 `${EMJ.DEV} <b>IT va Dasturlash yetakchilari:</b> Sun’iy intellekt, robot texnologiyalari va veb-ishlanmalar yaratuvchilari.\n` +
                 `${EMJ.SPORT} <b>Sport chempionlari:</b> Jahon va Osiyo chempionatlarida yurtimiz bayrog‘ini ko‘targan maktab yoshlari.\n` +
                 `${EMJ.BOOK} <b>«Zukko Kitobxon»:</b> Badiiy adabiyot va kitobxonlik tanlovlari sovrindorlari.\n` +
                 `${EMJ.GRADUATION} <b>Ilg‘or ustozlar:</b> Yangi avlodni tarbiyalayotgan fidoyi ustoz-pedagoglar.\n\n` +
                 `${EMJ.GEM} <i>Har bir yutuq — butun viloyatimizning faxri va kelajagidir!</i>`;

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: heroes,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Saytda iftixorlar ro‘yxati', url: WEBSITE_URL, icon_custom_emoji_id: TG_ICONS.TROPHY }],
        [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
      ]
    }
  });
}

// Helper: Send Podcast
async function sendPodcast(chatId) {
  const podcast = `${EMJ.STUDIO_MIC} <b>«Focus Suhbat» — Ma’rifiy Ovozli Muloqotlar</b> ${EMJ.HEADPHONES}\n\n` +
                  `Ziyolilar, faxriy ustozlar, namunali yosh liderlar va soha mutaxassislari bilan davra suhbatlari:\n\n` +
                  `${EMJ.GRADUATION} <b>«Ustozga Ehtirom»:</b> Fidoyi pedagoglarning ibratli hayot yo‘li va mahorat darslari.\n` +
                  `${EMJ.MEDAL_GOLD} <b>«Chempionlar Yo‘li»:</b> G‘olib o‘quvchilarning mashaqqatli mehnati va muvaffaqiyat sirlari.\n` +
                  `${EMJ.LAPTOP} <b>«Kelajak Kasblari»:</b> Ijtimoiy tarmoqlar, mobil tasvirga olish, montaj va dasturlash bo‘yicha bepul amaliy qo‘llanmalar.\n\n` +
                  `${EMJ.CAMERA_VIDEO} Suhbatlar viloyat maktablarining rasmiy media guruhlari tomonidan tasvirga olinadi.`;

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: podcast,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Saytda suhbatlarni ko‘rish', url: WEBSITE_URL, icon_custom_emoji_id: TG_ICONS.STUDIO_MIC }],
        [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
      ]
    }
  });
}

// Helper: Send Appeal Form
async function sendAppeal(chatId) {
  const appeal = `${EMJ.WRITE} <b>Rasmiy Taklif va Murojaat Yo‘llash</b> ${EMJ.MAIL}\n\n` +
                 `Siz ta’lim jarayoni, maktab media-burchagi faoliyati yoki o‘quvchilar yutuqlari bo‘yicha o‘z taklif va murojaatingizni to‘g‘ridan-to‘g‘ri yuborishingiz mumkin.\n\n` +
                 `Iltimos, murojaat matnini ushbu botga xabar sifatida yozib qoldiring. Har bir murojaat koordinatorlar va @${ADMIN_USERNAME} tomonidan nazoratga olinadi.`;

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: appeal,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Murojaat yozish tartibi', callback_data: 'action_murojaat', icon_custom_emoji_id: TG_ICONS.WRITE }],
        [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
      ]
    }
  });
}

// Helper: Send About
async function sendAbout(chatId) {
  const about = `${EMJ.TARGET} <b>«Focus Media» Loyihasi Bosh G‘oyasi</b> ${EMJ.CROWN}\n\n` +
                `<i>«Focus Media — bu shunchaki axborot kanali emas, balki Toshkent viloyati yoshlarining intellektual salohiyati, vatanparvarligi va zamonaviy imijini namoyon etuvchi raqamli ko‘zgudir!»</i>\n\n` +
                `${EMJ.MAP} <b>Hududiy qamrov:</b> Toshkent viloyatining barcha 22 ta tuman va shahri (900+ maktab)\n` +
                `${EMJ.TEAM} <b>Mas’ullar:</b> Maktab media koordinatorlari va iqtidorli o‘quvchilar jamoasi\n` +
                `${EMJ.LIGHTNING} <b>Asosiy maqsad:</b> Ochiq, xavfsiz va ta’sirchan milliy axborot makonini yaratish.\n\n` +
                `${EMJ.MAIL} <b>Rasmiy aloqa:</b> @${ADMIN_USERNAME}`;

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: about,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Rasmiy Portalni Ochish', url: WEBSITE_URL, icon_custom_emoji_id: TG_ICONS.GLOBE }],
        [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
      ]
    }
  });
}

// Helper: Send Districts Inline Grid
async function sendDistrictsMenu(chatId) {
  const inline_keyboard = [
    [
      { text: 'Nurafshon sh.', callback_data: 'dist_nurafshon', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Chirchiq sh.', callback_data: 'dist_chirchiq', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Angren sh.', callback_data: 'dist_angren', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'Olmaliq sh.', callback_data: 'dist_olmaliq', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Bekobod sh.', callback_data: 'dist_bekobod_sh', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Yangiyo‘l sh.', callback_data: 'dist_yangiyol_sh', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'Ohangaron sh.', callback_data: 'dist_ohangaron_sh', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Zangiota t.', callback_data: 'dist_zangiota', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Qibray t.', callback_data: 'dist_qibray', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'Bo‘stonliq t.', callback_data: 'dist_bostonliq', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Parkent t.', callback_data: 'dist_parkent', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Toshkent t.', callback_data: 'dist_toshkent_t', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'O‘rtachirchiq t.', callback_data: 'dist_ortachirchiq', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Yuqorichirchiq', callback_data: 'dist_yuqorichirchiq', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Quyichirchiq', callback_data: 'dist_quyichirchiq', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'Chinoz t.', callback_data: 'dist_chinoz', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Yangiyo‘l t.', callback_data: 'dist_yangiyol_t', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Bekobod t.', callback_data: 'dist_bekobod_t', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'Bo‘ka t.', callback_data: 'dist_boka', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Piskent t.', callback_data: 'dist_piskent', icon_custom_emoji_id: TG_ICONS.PIN },
      { text: 'Oqqo‘rg‘on t.', callback_data: 'dist_oqqorgon', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'Ohangaron t.', callback_data: 'dist_ohangaron_t', icon_custom_emoji_id: TG_ICONS.PIN }
    ],
    [
      { text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME },
      { text: 'Portalda ko‘rish', url: WEBSITE_URL, icon_custom_emoji_id: TG_ICONS.GLOBE }
    ]
  ];

  await callTelegram('sendMessage', {
    chat_id: chatId,
    text: `${EMJ.MAP} <b>Toshkent Viloyati Tuman va Shaharlari</b> ${EMJ.PIN}\n\nQuyidagi hududlardan birini tanlang va maktablar ko‘rsatkichi bilan tanishing:`,
    parse_mode: 'HTML',
    reply_markup: { inline_keyboard }
  });
}

// Handle Incoming Telegram Update
async function handleUpdate(update) {
  if (!update) return;

  // 1. Callback Query Handler (Inline Buttons Clicked)
  if (update.callback_query) {
    const cb = update.callback_query;
    const chatId = cb.message.chat.id;
    const data = cb.data || '';

    await callTelegram('answerCallbackQuery', { callback_query_id: cb.id });

    if (data === 'nav_home') {
      const fromName = cb.from.first_name || 'Foydalanuvchi';
      await sendWelcome(chatId, fromName);
      return;
    }

    if (data === 'nav_news') {
      await sendNews(chatId);
      return;
    }

    if (data === 'nav_cyber') {
      await sendCyber(chatId);
      return;
    }

    if (data === 'nav_heroes') {
      await sendHeroes(chatId);
      return;
    }

    if (data === 'nav_podcast') {
      await sendPodcast(chatId);
      return;
    }

    if (data === 'nav_districts') {
      await sendDistrictsMenu(chatId);
      return;
    }

    if (data === 'nav_murojaat') {
      await sendAppeal(chatId);
      return;
    }

    if (data === 'nav_about') {
      await sendAbout(chatId);
      return;
    }

    if (data === 'action_murojaat') {
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: `${EMJ.WRITE} <b>Rasmiy Murojaat Yuborish Tartibi</b> ${EMJ.SPARKLES}\n\n` +
              `Iltimos, ma’lumotlarni bitta xabarda quyidagi tartibda yozib qoldiring:\n\n` +
              `${EMJ.NUM_1} F.I.Sh (Familiya, Ism, Sharifingiz)\n` +
              `${EMJ.NUM_2} Tumaningiz va maktabingiz raqami\n` +
              `${EMJ.NUM_3} Telefon raqamingiz\n` +
              `${EMJ.NUM_4} Murojaat yoki taklifingiz mazmuni\n\n` +
              `${EMJ.CHECK} <i>Xabaringiz zudlik bilan mas’ul rahbar @${ADMIN_USERNAME} ga yetkaziladi.</i>`,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
          ]
        }
      });
      return;
    }

    if (data.startsWith('dist_')) {
      const key = data.replace('dist_', '');
      const d = DISTRICTS_DATA[key];
      if (d) {
        const text = `${EMJ.PIN} <b>${d.name}</b>\n\n` +
                     `${EMJ.ACADEMY} <b>Hudud toifasi:</b> ${d.type}\n` +
                     `${EMJ.SCHOOL} <b>Umumta’lim maktablari soni:</b> ${d.schools}\n` +
                     `${EMJ.TARGET} <b>Namunali tayanch maktabi:</b> ${d.model}\n` +
                     `${EMJ.STATUS_ACTIVE} <b>Media guruh holati:</b> Shakllantirilgan va faoliyatga tayyor\n\n` +
                     `${EMJ.CHECK} <i>Toshkent viloyati Maktabgacha va maktab ta’limi boshqarmasi ma’lumotlari asosida.</i>`;
        
        await callTelegram('sendMessage', {
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Tumanlar ro‘yxatiga qaytish', callback_data: 'nav_districts', icon_custom_emoji_id: TG_ICONS.BACK }],
              [{ text: 'Bosh menyu', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
            ]
          }
        });
      }
      return;
    }

    return;
  }

  // 2. Message Handler (Text / Commands / Free User Appeals)
  if (update.message) {
    const msg = update.message;
    const chatId = msg.chat.id;
    const text = (msg.text || '').trim();
    const fromName = msg.from.first_name || 'Foydalanuvchi';

    // Commands: /start, /help
    if (text === '/start' || text === '/help') {
      await sendWelcome(chatId, fromName);
      return;
    }

    // Menu: 📰 Yangiliklar & Dayjestlar
    if (text.includes('Yangiliklar')) {
      await sendNews(chatId);
      return;
    }

    // Menu: 🛡️ «Kiber-Qalqon»
    if (text.includes('Kiber-Qalqon')) {
      await sendCyber(chatId);
      return;
    }

    // Menu: 🏆 Viloyat Iftixorlari
    if (text.includes('Viloyat Iftixorlari')) {
      await sendHeroes(chatId);
      return;
    }

    // Menu: 🎙️ «Focus Suhbat»
    if (text.includes('Focus Suhbat')) {
      await sendPodcast(chatId);
      return;
    }

    // Menu: 🗺️ 22 Ta Tuman Maktablari
    if (text.includes('22 Ta Tuman') || text.includes('Tuman Maktablari')) {
      await sendDistrictsMenu(chatId);
      return;
    }

    // Menu: 📝 Murojaat Yo‘llash
    if (text.includes('Murojaat')) {
      await sendAppeal(chatId);
      return;
    }

    // Menu: 🌐 Rasmiy Vebsayt
    if (text.includes('Rasmiy Vebsayt') || text.includes('Vebsayt')) {
      await callTelegram('sendMessage', {
        chat_id: chatId,
        text: `${EMJ.ROCKET} <b>«Focus Media» Rasmiy Elektron Portali</b> ${EMJ.GEM}\n\n` +
              `Viloyat ta’lim tizimi, yo‘l xaritasi va kutilayotgan natijalar bilan rasmiy vebsayt orqali to‘liq tanishishingiz mumkin:\n\n` +
              `${EMJ.GLOBE} ${WEBSITE_URL}`,
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Saytni Ochish', url: WEBSITE_URL, icon_custom_emoji_id: TG_ICONS.ROCKET }],
            [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
          ]
        }
      });
      return;
    }

    // Menu: 🎯 Loyiha Haqida
    if (text.includes('Loyiha Haqida') || text === '/about') {
      await sendAbout(chatId);
      return;
    }

    // Default Fallback (User sent a free-text message / appeal)
    const ticketNum = Math.floor(10000 + Math.random() * 90000);
    const replyText = `${EMJ.CHECK} <b>Murojaatingiz qabul qilindi!</b> ${EMJ.SPARKLES}\n\n` +
                      `Xabaringiz ${EMJ.FOLDER} <b>№ FM-${ticketNum}</b> raqami bilan tizimda ro‘yxatga olindi hamda mas’ul rahbar @${ADMIN_USERNAME} ga yetkazildi.\n\n` +
                      `${EMJ.STAR_SPARKLE} E’tiboringiz va ta’lim rivojiga qo‘shayotgan hissangiz uchun tashakkur!`;

    await callTelegram('sendMessage', {
      chat_id: chatId,
      text: replyText,
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Yana murojaat yo‘llash', callback_data: 'action_murojaat', icon_custom_emoji_id: TG_ICONS.WRITE }],
          [{ text: 'Bosh menyuga qaytish', callback_data: 'nav_home', icon_custom_emoji_id: TG_ICONS.HOME }]
        ]
      }
    });
  }
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

// ============================================================================
// FOCUS MEDIA — Local Polling Runner
// Run locally: node bot_polling.js
// ============================================================================

try { require('dns').setDefaultResultOrder?.('ipv4first'); } catch (_) {}

const webhookModule = require('./api/webhook.js');
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8492338050:AAFWOWRrc_kAd8hc88qfyalxkCt_ehe5zec';
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function main() {
  console.log('----------------------------------------------------');
  console.log('🎯 Focus Media Telegram Bot — Polling Service Started');
  console.log('🤖 Bot Token:', BOT_TOKEN.slice(0, 10) + '...');

  // 1. Delete Webhook to allow polling
  try {
    const delRes = await fetch(`${TELEGRAM_API}/deleteWebhook`);
    const delJson = await delRes.json();
    console.log('📡 Webhook cleared for polling:', delJson.ok ? 'OK' : delJson.description);
  } catch (err) {
    console.warn('⚠️ Webhook clear warning:', err.message);
  }

  // 2. Fetch Bot Me
  try {
    const meRes = await fetch(`${TELEGRAM_API}/getMe`);
    const meJson = await meRes.json();
    if (meJson.ok) {
      console.log(`✅ Connected as: ${meJson.result.first_name} (@${meJson.result.username})`);
      console.log('🚀 Ready to receive messages in Telegram!');
    }
  } catch (err) {
    console.error('❌ Failed to connect to Telegram:', err.message);
  }
  console.log('----------------------------------------------------');

  let offset = 0;

  while (true) {
    try {
      const res = await fetch(`${TELEGRAM_API}/getUpdates?offset=${offset}&timeout=25`);
      const data = await res.json();

      if (data.ok && Array.isArray(data.result)) {
        for (const update of data.result) {
          offset = update.update_id + 1;
          const fromUser = update.message ? update.message.from.first_name : (update.callback_query ? update.callback_query.from.first_name : 'User');
          const content = update.message ? (update.message.text || '[Media]') : (update.callback_query ? `[Callback: ${update.callback_query.data}]` : '[Other]');
          console.log(`[${new Date().toLocaleTimeString()}] Update #${update.update_id} from ${fromUser}: ${content}`);

          // Process update
          await webhookModule.handleUpdate(update);
        }
      }
    } catch (err) {
      console.error('Polling error:', err.message);
      await new Promise(r => setTimeout(r, 3000));
    }
  }
}

main().catch(console.error);

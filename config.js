// 公開用の設定
// publishable key はブラウザに配ってよい鍵。secret / service_role の鍵とデータベースのパスワードは絶対に書かない
window.TOMO_CONFIG = {
  url: 'https://rvtydmcjpooznbsxskax.supabase.co',
  anonKey: 'sb_publishable_1QnLEPc3vgHTeneAg7aCMw_vfU9IINj',
  turnstileSiteKey: '0x4AAAAAAFNke0400sOqBtow'   // Cloudflare Turnstile（荒らし対策）の公開用の鍵
};

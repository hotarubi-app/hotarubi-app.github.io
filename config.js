// 公開用の設定
// publishable key はブラウザに配ってよい鍵。secret / service_role の鍵とデータベースのパスワードは絶対に書かない
window.TOMO_CONFIG = {
  url: 'https://rvtydmcjpooznbsxskax.supabase.co',
  anonKey: 'sb_publishable_1QnLEPc3vgHTeneAg7aCMw_vfU9IINj',
  turnstileSiteKey: ''   // Cloudflare Turnstile を使うときだけ（荒らし対策）
};

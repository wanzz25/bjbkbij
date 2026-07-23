// api/_lib/config.js
// SATU tempat untuk semua token — isi langsung di CONFIG di bawah ini.
//
// Kalau kamu deploy lewat Vercel dan mengisi Environment Variables di
// dashboard dengan nama yang sama (GITHUB_TOKEN, VERCEL_TOKEN, dst),
// nilai dari dashboard itu dipakai duluan — isian di CONFIG jadi
// fallback kalau env var-nya kosong. Jadi kamu bebas pilih salah satu
// cara, atau campur keduanya.
//
// ⚠️ Kalau repo ini akan di-push ke GitHub PUBLIK: kosongkan CONFIG di
// bawah dan isi token lewat Environment Variables di dashboard Vercel
// saja (lihat README-BACKEND.md). Kalau repo ini PRIVAT dan cuma kamu
// yang akses, aman untuk diisi langsung di sini.

const CONFIG = {
  GITHUB_TOKEN: "",     // contoh: "ghp_xxxxxxxxxxxxxxxxxxxx"
  VERCEL_TOKEN: "",     // contoh: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  VERCEL_TEAM_ID: "",   // opsional, kosongkan kalau tidak pakai Team
  NETLIFY_TOKEN: "",    // contoh: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
};

function pick(key) {
  return process.env[key] || CONFIG[key] || "";
}

module.exports = {
  GITHUB_TOKEN: pick("GITHUB_TOKEN"),
  VERCEL_TOKEN: pick("VERCEL_TOKEN"),
  VERCEL_TEAM_ID: pick("VERCEL_TEAM_ID"),
  NETLIFY_TOKEN: pick("NETLIFY_TOKEN"),
};

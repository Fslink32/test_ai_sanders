# Sanders Landing Page (Next.js)

Landing page modern terinspirasi dari Sanders untuk kebutuhan presentasi layanan EPC.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

## Deploy ke Vercel

1. Push repo ini ke GitHub/GitLab/Bitbucket.
2. Buka https://vercel.com dan pilih **New Project**.
3. Import repository, pastikan framework terdeteksi sebagai **Next.js**.
4. Klik **Deploy**. Vercel akan otomatis build dengan perintah `next build`.

## Langkah cepat: push ke GitHub + deploy Vercel

```bash
git init

git add .

git commit -m "Initial commit"

# ganti <your-username> dan <repo>

git remote add origin https://github.com/<your-username>/<repo>.git

git push -u origin main
```

Setelah repo ada di GitHub, lanjutkan deploy dengan langkah di atas pada bagian **Deploy ke Vercel**.

## Struktur

- `app/page.js` — konten landing page.
- `app/globals.css` — styling global.

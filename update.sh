#!/data/data/com.termux/files/usr/bin/bash

# Script update otomatis untuk GitHub Pages
# Lokasi: ~/websiteku/update.sh

echo "🔄 Update WebsiteKu..."

# Tambahkan semua perubahan
git add .

# Commit dengan pesan otomatis pakai tanggal & jam
git commit -m "Update WebsiteKu $(date '+%Y-%m-%d %H:%M:%S')"

# Push ke branch utama (ganti 'main' jika branch kamu 'master')
git push origin main

echo "✅ Website berhasil diupdate!"
echo "➡️  Cek di: https://bjirki.github.io/websiteku/"


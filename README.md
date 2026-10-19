# Devsecops-p5--0110225018-
# DevSecOps Demo Application (Node.js & Express)

Aplikasi web sederhana berbasis Node.js yang dirancang khusus untuk demonstrasi implementasi pipeline **DevSecOps** (Continuous Integration, Unit Testing, dan Static Application Security Testing / SAST menggunakan GitHub Actions).

---

## 1. Nama & Fungsi Aplikasi
* **Nama Aplikasi:** `devsecops-demo-app`
* **Fungsi Utama:** Menyediakan layanan *backend* API sederhana untuk proses autentikasi pengguna (*login*), pengelolaan data pengguna, serta dilengkapi dengan modul pengujian otomatis (*unit testing*) guna memastikan integritas logika bisnis aplikasi.

---

## 2. Bahasa & Framework yang Digunakan
* **Bahasa Pemrograman:** JavaScript (Node.js)
* **Framework:** Express.js (v4.18.2)
* **Testing Engine:** Native Node.js Module (`test.js`)
* **Security Scans:** Semgrep (Static Application Security Testing)

---

## 3. Struktur Proyek
```text
devsecops-demo-app/
├── .github/
│   └── workflows/
│       └── devsecops.yml    # Konfigurasi pipeline CI/CD GitHub Actions
├── .gitignore               # Pengabaian file lokal & dependensi (node_modules)
├── app.js                   # Entry point server utama Express
├── authController.js        # Logika bisnis autentikasi & login
├── db.js                    # Simulasi database & data pengguna
├── routes.js                # Pengatur rute / endpoint URL API
├── test.js                  # Skrip unit test otomatis
└── package.json             # Manajer dependensi & skrip konfigurasi

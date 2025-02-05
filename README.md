# 📦 Jr. Full Stack Developer Take Home Test - Backend

## 🚀 Tech Stack

- **Backend:** Node.js, Express.js
- **ORM:** Sequelize
- **Database:** PostgreSQL
- **Authentication:** JWT (JSON Web Token)

## ⚙️ Installation Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yazid313/backEndTestDevHunts.git
cd backEndTestDevHunts
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Edit file `.env` di root directory :

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=yourdatabase
```

Edit file `./src/config/config.json` di root directory :

"password": "yourpassword",
"database": "yourdatabase",

### 4️⃣ Database Migration

Jalankan migrasi untuk membuat tabel di database:

```bash
npx sequelize db:migrate
```

### 5️⃣ Running the Server

```bash
npm start
```

Atau jika ingin mode development:

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000` (atau port yang dikonfigurasi).

## 📋 API Endpoints

### 🔐 Authentication

### 🔐 cek di folder router

- Register user baru
- Login user
- Mendapatkan semua task
- Menambah task baru
- Update task
- Hapus task

### 📋 semua bisa di pakai di aplikasi sederhana yang telah saya buat di front end

## ✅ Features

- User authentication menggunakan JWT
- Manajemen data menggunakan Sequelize ORM
- CRUD operations untuk task

## 📢 Notes

- Pastikan PostgreSQL sudah berjalan di perangkat kamu.
- Gunakan front end yang telah saya buat untuk testing API.

---

**Author:** [Cecep Yazid Albustomi]  
**Repository:** [https://github.com/yazid313/backEndTestDevHunts](https://github.com/yazid313/backEndTestDevHunts)

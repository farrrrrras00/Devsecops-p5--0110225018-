// authController.js - Logika autentikasi
const db = require('./db');

function login(username, password) {
  if (!username || !password) {
    return { success: false, message: "Username dan password wajib diisi!" };
  }

  const user = db.findUser(username);
  if (user && password === "secret123") {
    return { success: true, user };
  }

  return { success: false, message: "Kredensial tidak valid!" };
}

module.exports = { login };
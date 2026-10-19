// test.js - Unit test sederhana
const authController = require('./authController');

console.log("Menjalankan Unit Test...");

// Test 1: Test login gagal jika password salah
const test1 = authController.login("admin", "wrongpassword");
if (test1.success === false) {
  console.log(" Test 1 Passed: Login gagal dengan password salah");
} else {
  console.error(" Test 1 Failed");
  process.exit(1);
}

// Test 2: Test login berhasil jika password benar
const test2 = authController.login("admin", "secret123");
if (test2.success === true) {
  console.log(" Test 2 Passed: Login berhasil dengan password benar");
} else {
  console.error(" Test 2 Failed");
  process.exit(1);
}

console.log("Semua pengujian berhasil!");
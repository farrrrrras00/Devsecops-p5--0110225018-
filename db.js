// db.js - Simulasi koneksi database
const users = [
  { id: 1, username: "admin", role: "administrator" },
  { id: 2, username: "user1", role: "student" }
];

function findUser(username) {
  return users.find(u => u.username === username);
}

module.exports = { users, findUser };
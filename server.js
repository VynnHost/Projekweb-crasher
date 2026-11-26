const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware buat baca form POST
app.use(express.urlencoded({ extended: true }));

// Nge-serve file HTML utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint dummy buat handle login / auth kamu
app.post('/auth', (req, res) => {
  const { username, key } = req.body;
  // Contoh validasi sederhana, bisa kamu sesuaikan nanti
  if (username && key) {
    res.send("Login Berhasil!"); // Atau redirect ke halaman dashboard kamu
  } else {
    res.redirect('/?msg=Username%20atau%20Key%20salah!');
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

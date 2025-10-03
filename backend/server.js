const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

// API örnek endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "API çalışıyor 🚀" });
});

// React build klasörünü kullan
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Tüm istekler React index.html'e gitsin
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));

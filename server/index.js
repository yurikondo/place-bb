const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "テスト投稿🚀" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`サーバー起動中🚀 *:${PORT}`);
});

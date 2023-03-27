const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("テスト投稿🚀");
});

app.get("/api", (req, res) => {
  res.json({ message: "テスト投稿🚀" });
});

app.listen(PORT, () => {
  console.log(`サーバー起動中🚀 *:${PORT}`);
});

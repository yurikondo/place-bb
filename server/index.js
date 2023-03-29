const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const mongoose = require("mongoose");
require("dotenv").config();

//データベース接続
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB接続中🚀"))
  .catch((err) => {
    console.log(`DB接続のエラー/server/index.js👉${err}`);
  });

//ミドルウェア
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("/api", (req, res) => {
//   res.json({ message: "テスト投稿🚀" });
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`サーバー起動中🚀${PORT}`);
});

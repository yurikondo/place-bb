const router = require("express").Router();
const User = require("../../models/User");

//ユーザー登録
router.post("/register", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (err) {
    console.log(`ユーザー登録のエラー/auth.js👉` + err);
    return res.status(500);
  }
});

//ログイン
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("ユーザーが見つかりません❌");

    const vailedPassword = req.body.password === user.password;
    if (!vailedPassword) return res.status(400).json("パスワードが違います❌");

    return res.status(200).json(user);
  } catch (err) {
    console.log(`ログインのエラー/auth.js👉` + err);
    return res.status(500);
  }
});

// router.get("/", (req, res) => {
//   res.send("Auth ルーター🎉");
// });

module.exports = router;

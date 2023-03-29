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
    return res.status(500);
    console.log(`$1のエラー👉` + err);
  }
});

// router.get("/", (req, res) => {
//   res.send("Auth ルーター🎉");
// });

module.exports = router;
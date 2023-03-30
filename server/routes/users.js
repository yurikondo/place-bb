const router = require("express").Router();
const User = require("../../models/User");

//CRUD
//ユーザー情報の更新
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        //$setはmongooseで全てのパラメータを指定する
        $set: req.body,
      });
      return res.status(200).json("ユーザー情報が更新されました🎉");
    } catch (err) {
      console.log(`ユーザー更新のエラー/users.js👉` + err);
      return res.status(500);
    }
  } else {
    return res.status(403).json("自分のアカウントの時だけ更新できます❌");
  }
});

//ユーザー情報の削除
//ユーザー情報の取得

// router.get("/", (req, res) => {
//   res.send("User ルーター🎉");
// });

module.exports = router;

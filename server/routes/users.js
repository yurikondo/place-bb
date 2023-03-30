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
      return res.status(500).json(`ユーザー更新のエラー/users.js👉` + err);
    }
  } else {
    return res.status(403).json("自分のアカウントの時だけ更新できます❌");
  }
});

//ユーザー情報の削除
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      return res.status(200).json("ユーザー情報が削除されました🗑");
    } catch (err) {
      return res.status(500).json(`ユーザー削除のエラー/users.js👉` + err);
    }
  } else {
    return res.status(403).json("自分のアカウントの時だけ削除できます❌");
  }
});

//ユーザー情報の取得
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    //passwordとupdatedAtを取り除くため、分割代入で必要な値だけotherに入れる
    const { password, updatedAt, ...other } = user._doc;
    return res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(`ユーザー取得のエラー/users.js👉` + err);
  }
});

//ユーザーフォロー
//ここでの:idはこれからフォローするuserのid
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      //userはこれからフォローするuser
      const user = await User.findById(req.params.id);
      //currentUserはログインしているuser
      const currentUser = await User.findById(req.body.userId);
      //フォロワーにログインしているユーザーがいなければ
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          //配列にpushする
          $push: {
            followers: req.body.userId,
          },
        });
        //ログインしているユーザーのフォローしているユーザーを追加
        await currentUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        });
        return res.status(200).json("フォローに成功しました🎉");
      } else {
        return res
          .status(403)
          .json("あなたはすでにこのユーザーをフォローしています❌");
      }
    } catch (err) {
      return res.status(500).json(`ユーザーフォローのエラー👉` + err);
    }
  } else {
    return res.status(500).json("自分自身をフォローできません❌");
  }
});

// router.get("/", (req, res) => {
//   res.send("User ルーター🎉");
// });

module.exports = router;

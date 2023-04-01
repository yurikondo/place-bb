const router = require("express").Router();
const Post = require("../../models/Post");

//投稿を作成する
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(`投稿作成のエラー👉` + err);
  }
});

//投稿を更新する
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("投稿の編集に成功しました🎉");
    } else {
      return res.status(403).json("他のユーザーの投稿は編集できません❌");
    }
  } catch (err) {
    return res.status(403).json(`投稿更新のエラー👉` + err);
  }
});

//投稿を削除する
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("投稿の削除に成功しました🗑️");
    } else {
      return res.status(403).json("他のユーザーの投稿は削除できません❌");
    }
  } catch (err) {
    return res.status(403).json(`投稿削除のエラー👉` + err);
  }
});

//特定の投稿を取得する
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(`投稿取得のエラー👉` + err);
  }
});

//特定の投稿にいいねを押す
router.put("/:id/like", async (req, res) => {
  try {
    //postはこれからいいねするpost
    const post = await Post.findById(req.params.id);
    //その投稿にまだログインしているユーザーがいいねしていなかったらいいねできる
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        //配列にpushする
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("投稿にいいねしました🎉");
    } else {
      //投稿にすでにいいねが押されていたらログインしているユーザーIDを取り除く
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(403).json("投稿にいいねを外しました🎉");
    }
  } catch (err) {
    return res.status(500).json(`投稿にいいねする処理のエラー👉` + err);
  }
});

// router.get("/", (req, res) => {
//   res.send("Post ルーター🎉");
// });

module.exports = router;

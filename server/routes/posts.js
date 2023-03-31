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

// router.get("/", (req, res) => {
//   res.send("Post ルーター🎉");
// });

module.exports = router;

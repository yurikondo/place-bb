const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Post ルーター🎉");
});

module.exports = router;
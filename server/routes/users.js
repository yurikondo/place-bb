const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("User ルーター🎉");
});

module.exports = router;
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Auth ルーター🎉");
});

module.exports = router;
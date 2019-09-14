

const express = require('express');

const router = express.Router();

router.get('/code', (req, res, next) => {
  res.render("codeOfConduct");
});

module.exports = router;

const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/admin', function(req, res, next) {
  res.sendFile(path.join(__dirname + '../../views/admin.html'));
});

module.exports = router;

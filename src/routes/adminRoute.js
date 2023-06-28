const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/admin', function (req, res) {

    res.sendFile(path.join(__dirname, '../views/public/admin.html'));
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/logout', (req, res) => {
    res.render('index.ejs');
});

module.exports = router;
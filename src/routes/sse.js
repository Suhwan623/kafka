const express = require('express');
const router = express.Router();
const sseController = require('../controller/sse.controller');

router.get('/connect/:userId', sseController.connect);

module.exports = router;

const express = require('express');
const sseService = require('../service/sse.service');

const router = express.Router();

router.get('/connect/:userId', (req, res) => {
    const { userId } = req.params;
    console.log(`SSE: connecting user ${userId}`);
    sseService.connect(userId, res);
});

module.exports = router;

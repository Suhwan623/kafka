const express = require('express');
const router = express.Router();
const consumerController = require('../controller/consumer.controller');

// 메시지 소비 시작
router.get('/', consumerController.startConsumer);

module.exports = router;

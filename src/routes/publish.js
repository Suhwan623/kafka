const express = require('express');
const router = express.Router();
const publishController = require('../controller/publish.controller');

router.post('/', publishController.publishMessage);
module.exports = router;

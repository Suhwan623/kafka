// src/controllers/publishController.js
const publishService = require('../service/publish.service');

const publishMessage = async (req, res) => {
  try {
    const { topic, value } = req.body;

    if (!topic || !value) {
      return res.status(400).json({ error: '토픽 혹은 메세지 내용이 없습니다.' });
    }

    await publishService.sendMessage(topic, value);

    res.status(200).json({ message: '메세지가 성공적으로 전송되었습니다.' });
  } catch (error) {
    console.error('메세지 전송 실패:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { publishMessage };

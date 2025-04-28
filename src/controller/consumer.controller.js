const consumerService = require('../service/consumer.service');

const startConsumer = async (req, res) => {
  try {
    await consumerService.runConsumer();
    res.status(200).json({ message: 'Consumer가 실행되었습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Consumer 실행 실패' });
  }
};

module.exports = {
  startConsumer
};

// src/services/publishService.js
const { Kafka, Partitioners } = require('kafkajs');

const brokerUrl = process.env.KAFKA_BROKER_URL || 'localhost:9092';

const kafka = new Kafka({
  clientId: 'client-1',
  brokers: [`${brokerUrl}`]
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner
});

// 메세지를 Kafka에 전송하는 함수
const sendMessage = async (topic, value) => {
  await producer.connect();
  console.log('Connected to', brokerUrl);

  await producer.send({
    topic,
    messages: [{ value }]
  });

  await producer.disconnect();
};

const publishService = {
  sendMessage
};

module.exports = publishService;

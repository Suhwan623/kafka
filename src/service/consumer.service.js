const { Kafka } = require('kafkajs');

const brokerUrl = process.env.KAFKA_BROKER_URL || 'localhost:9092';
console.log('connect to', brokerUrl);

const kafka = new Kafka({
  clientId: 'client-2',
  brokers: [`${brokerUrl}`]
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        topic: topic.toString(),
        partition: partition.toString(),
        value: message.value.toString(),
      });

    },
  });
};

module.exports = { runConsumer };
const { addEmitter, deleteEmitter, getEmitter } = require("./emitter.service");

const defaultTimeout = 60 * 1000 * 60;
const SSE_EVENT_NAME = 'sse';

const connect = (userId, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.write(`event: ${SSE_EVENT_NAME}\n`);
    res.write(`data: connect completed\n\n`);

    addEmitter(userId, res);

    res.setTimeout(defaultTimeout, () => {
        console.log(`SSE: Timeout occurred for user ${userId}`);
        res.end();
        deleteEmitter(userId); 
    });

    // 클라이언트가 연결을 종료하면 Map에서 해당 사용자 제거
    res.on('close', () => {
        deleteEmitter(userId);
    });
};

const sendNotification = (userId, notificationId) => {
    const emitter = getEmitter(userId);
    if (emitter) {
        emitter.write(`event: ${SSE_EVENT_NAME}\n`);
        emitter.write(`id: ${notificationId}\n`);
        emitter.write(`data: ${notificationId}\n\n`); // notificationId 보내기
        console.log(`SSE: sent to user ${userId}`);
    } else {
        console.log(`SSE: no connection found for user ${userId}`);
    }
};

module.exports = {
    connect,
    sendNotification
};

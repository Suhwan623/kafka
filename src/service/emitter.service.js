const sseEmitter = new Map();

const addEmitter = (userId, res) => {
    sseEmitter.set(userId, res);
};

const deleteEmitter = (userId) => {
    sseEmitter.delete(userId);
};

const getEmitter = (userId) => { 
    return sseEmitter.get(userId);
};

module.exports = {
    addEmitter,
    deleteEmitter,
    getEmitter,
};

const express = require('express');
const publishRouter = require('./src/routes/publish')
const consumerRouter = require('./src/routes/consumer');
const sseRouter = require('./src/routes/sse')
const app = express();

app.use(express.json())
app.set('port', process.env.PORT || 3000);

app.use('/publish', publishRouter)
app.use('/consumer', consumerRouter);
app.use('/sse', sseRouter);

app.get('/', (req, res) => {
    res.send('Hello, Express')
});

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기 중')
});
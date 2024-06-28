const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on AWS Lambda!' });
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello route!' });
});

module.exports.handler = serverless(app);

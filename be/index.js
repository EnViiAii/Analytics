const express = require('express');
const axios = require('axios');
const cors = require('cors');
const ngrok = require('ngrok');
const bodyParser = require('body-parser');
const { dbConnection } = require('./configs/database.js');
const app = express();
const PORT = process.env.PORT || 8080;
const NGROK_URL = process.env.NGROK_URL;

// middleware
app.use(cors());
app.use(bodyParser.json());


app.post('/api/message', (req, res) => {
    const { message } = req.body;
    res.json({ response: `You sent: ${message}` });
});

app.post('/webhook', (req, res) => {
    console.log('Received a webhook:', req.body);
    res.send('Webhook received!');
});

// start the server
dbConnection();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);


    ngrok.connect(NGROK_URL).then((url) => {
        console.log(`Ngrok tunnel is active at: ${url}`);
    }).catch((error) => {
        console.error('Error starting ngrok:', error);
    });
});
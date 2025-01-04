const express = require('express')
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');
const { sendBasicEmail } = require('./services/email-services');
const startServer = () => {
    const app = express();
    app.listen(PORT, () => {
        //from to subject body
        sendBasicEmail('jaskaranyt123@gmail.com', 'singh.jaskaran2024@gmail.com', 'Testing', 'application is under testing phase');
        console.log(`Server Listening on port : ${PORT}`)
    })
}
startServer()
const express = require('express')
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');
const startServer = () => {
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server Listening on port : ${PORT}`)
    })
}
startServer()
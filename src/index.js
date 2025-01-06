const express = require('express')
const bodyParser = require('body-parser');
const { PORT } = require('./config/server-config');
const { sendBasicEmail } = require('./services/email-services');
const jobs = require('./utils/job')
const TicketController = require('./controller/ticket-controller')
const startServer = () => {
    const app = express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.post('/api/v1/tickets',TicketController.create)
    app.listen(PORT, () => {
        
        jobs()

    })
}
startServer()
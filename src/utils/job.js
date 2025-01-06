const cron = require('node-cron');
const emailService = require('../services/email-services');
const sender = require('../config/emailConfig')
const setupJobs = () => {
    cron.schedule('*/10 * * * * *', async () => { // Corrected cron expression
        console.log('Running a task every 10 sec');
        try {
            const response = await emailService.fetchPendingEmails();
            response.forEach( (email) => {
                sender.sendMail({
                
                    to: email.dataValues.recepientEmail,
                    subject: email.dataValues.subject, 
                    text: email.dataValues.content
                },
                async (err,data)=> {
                    if(err) {
                        console.log(err)
                    }else{
                        console.log(data)
                        await emailService.updateStatus(email.dataValues.id, {
                            status: "SUCCESS"
                        })
                    }
                }
            )
                
                
                
            });
            //console.log(response);
        } catch (error) {
            console.error('Error fetching pending emails:', error);
        }
    });
};

module.exports = setupJobs;

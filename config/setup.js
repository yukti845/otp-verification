require('dotenv').config()

module.exports = {
    DB: process.env.DB,
    PORT: process.env.PORT,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_SERVICE_SID: process.env.TWILIO_SERVICE_SID,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID
}
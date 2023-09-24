const {TWILIO_AUTH_TOKEN,TWILIO_SERVICE_SID,TWILIO_ACCOUNT_SID} = require("../config/setup")

const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})

const sendOtp = async(req, res) => {
    const {countryCode, phoneNumber} = req.body
    try{
        const otpRes = await client.verify.v2.services(TWILIO_SERVICE_SID)
                        .verifications.create({
                            to: `+${countryCode}${phoneNumber}`,
                            channel: "sms"
                        });
                        console.log("response backend>>>")
                        res.status(200).json({
                            success: true,
                            data: otpRes
                        })
    }
    catch(error){
        res.status(error.status || 400).send(error.message || "Somenthing wnet wrong") 
    }
}

const verifyOtp = async(req, res) => {
    const {phoneNumber, otp} = req.body
    console.log(phoneNumber)
    
    try{
        const verifiedRes = await client.verify.v2.services(TWILIO_SERVICE_SID)
                                .verificationChecks.create({
                                    to: `+${phoneNumber}`,
                                    code: otp 
                                })
                            res.status(200).json({
                                success: true, 
                                data: verifiedRes
                            })
    }
    catch(error){
        res.status(error.status || 400).send(error.message || "Somenthing wnet wrong")
    }
}

module.exports = {
    sendOtp, verifyOtp
}
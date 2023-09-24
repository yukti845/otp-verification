const router = require("express").Router()
const {sendOtp, verifyOtp} = require("./controllers/otp")

router.post('/send-otp', sendOtp)
router.post('/verify-otp', verifyOtp)

module.exports = router
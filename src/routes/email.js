const express = require('express');
const router = express.Router();
const enviarEmail = require('../controllers/login-controller');

router.post('/', enviarEmail.sendEmail);    
module.exports = router;
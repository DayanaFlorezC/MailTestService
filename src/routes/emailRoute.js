const express = require('express');
const router = express.Router();

const {
    createEmailAndSend
} = require('../controllers/emailController');


router.post('/email', createEmailAndSend);

module.exports = router
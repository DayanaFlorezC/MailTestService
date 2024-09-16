const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (destinatario, asunto, cuerpo) => {

    const msg = {
        to: destinatario,
        from: process.env.CORREO,
        subject: asunto,
        text: cuerpo,
    };

    try {
        return await sgMail.send(msg);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return false;
    }
};

module.exports = {
    sendEmail
};
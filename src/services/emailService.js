const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { createEmailRepository } = require('../repositories/emailRepository')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendEmail = async (destinatario, asunto, cuerpo, placa, partnerId) => {

    const msg = {
        to: destinatario,
        from: process.env.CORREO,
        subject: asunto,
        text: cuerpo,
    };

    try {
        const result = await sgMail.send(msg);

        if (result) {
            //!fix error database
            await createEmailRepository({
                to: destinatario,
                from: 'mayoflorezc@gmail.com',
                message: cuerpo,
                subject: 'Prueba estacionamiento - Type-orm - Postgresql',
                placa: placa,
                partnerId: partnerId
            })
        }

        return result
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return false;
    }
};

module.exports = {
    sendEmail
};
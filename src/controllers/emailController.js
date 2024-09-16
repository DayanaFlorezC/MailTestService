const {sendEmail} = require('../services/emailService');

const createEmailAndSend = async (req, res) => {
    try {
        const data = req.body;

        const cuerpo = `${data.mensaje} - ${data.placa}`;

        const resp = await sendEmail(data.email, 'Prueba estacionamiento', cuerpo);

        if(!resp){
            return res.status(400).send('Hubo un error al enviar el email');
        }

        res.status(200).send('Email enviado correctamente');
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 

module.exports = {
    createEmailAndSend
}
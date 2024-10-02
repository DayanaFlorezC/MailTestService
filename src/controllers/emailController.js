const {sendEmail} = require('../services/emailService');

const createEmailAndSend = async (req, res) => {
    try {
        const data = req.body;

        const cuerpo = `${data.mensaje} - ${data.placa} - ${data.parqueaderoNombre}`;

        const resp = await sendEmail(data.email, 'Prueba estacionamiento', cuerpo, data.placa, data.partnerId);

        if(!resp){
            return res.status(400).send('Hubo un error al enviar el email');
        }

        res.status(200).json({success: true, mensaje: 'ok'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
} 

module.exports = {
    createEmailAndSend
}
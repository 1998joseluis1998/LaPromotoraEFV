var nodemailer = require('nodemailer');

module.exports = (email) => {
    //const auth = require('./Cuenta.js');
    
    const auth = {
        user: 'telemedicinaunifranz@gmail.com',
        pass: 'bgfnivhvouxpwpht'
    }

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: 'telemedicinaunifranz@gmail.com',
            pass: 'bgfnivhvouxpwpht'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions = {
        from: auth.user,
        to: email,
        subject: 'Envio de mensajes(La Promotora)',
        text: 'Mensajes enviados correctamente'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    return "funciono";
}
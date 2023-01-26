var nodemailer = require('nodemailer');

module.exports = (email,msg) => {
    //const auth = require('./Cuenta.js');
    
    const auth = {
        user: 'jlrodriguez@lapromotora.com.bo',
        pass: 'Clave1234*'
    }

    var transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: '587',
        auth: {
            user: 'jlrodriguez@lapromotora.com.bo',
            pass: 'Clave1234*'
        },
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3' ,            
            rejectUnauthorized: false            
            }        
    });
    var mailOptions = {
        from: auth.user,
        to: email,
        subject: 'Envio de mensajes(La Promotora)',
        text: msg
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
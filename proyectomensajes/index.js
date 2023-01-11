const path=require('path')
const express=require('express')
const cors=require('cors')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const mongoose= require('mongoose');
const bodyParser = require('body-parser')
const app=express();
var MongoDBStore = require('connect-mongodb-session')(session);


//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./src/Modelo/Autenticacion/local.js')(passport);
 
/*conexion mongo sesion*/
//Conexión sesiones BD
mongoose.set('strictQuery',false);

var store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/mensajes',
    collection: 'mySessions'
});
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    rolling: true,
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 'COOKIE_TIMEOUT',
        maxAge: 1000 * 60 * 60 * 24 * 1
    },
    maxAge: 1000 * 60 * 60 * 24 * 1,
    store: store,
    resave: false,
    saveUninitialized: false
}));
mongoose.connect('mongodb://127.0.0.1:27017/mensajes')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));


app.use(bodyParser.json());
app.use(cookieParser());

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.confirm = req.flash("confirmacion");
    app.locals.error = req.flash("error");
    next();
});


//problema del fetch(solucionar)
app.use(cors())

//conexion a las rutas de la carpeta public
app.use(express.static(path.join(__dirname,'drivin-1.0.0')))

app.set("views", path.join(__dirname, "src/Vista"));
app.set("view engine", "ejs");

var rutas = require("./src/Controlador/HTTP/index.js");
app.use(rutas(passport));

//LDAP
/*const client_admin = ldap.createClient({
    url: ['ldap://172.24.4.42:389']
    });            


client_admin.on('error', (err) => {
  // handle connection error
})
client_admin.bind('CN=Jose Luis Rodriguez Peredo,OU=1.1 AgenciaCentral,OU=1. Usuarios,OU=La Promotora,OU=CB,OU=BO,DC=lapromotora,DC=com', 'Pa$$w0rd*.0', (err) => {
                if (err) return console.log('El error es', err);
            });
    
let opts = {
        filter: 'cn=admin'
    }
    
client_admin.search('dc=example,dc=com', opts, (err, res) => {
    res.on('searchEntry', (entry) => {
            console.log('Entry', JSON.stringify(entry.object));
    });

    res.on('searchReference', (referral) => {
        // console.log('Referral', referral);
    });

    res.on('error', (err) => {
        // console.log('Error is', err);
    });

    res.on('end', (result) => {
        console.log('Result is', result);
    })
})    
*/


app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log("servidor iniciado en el puerto " + app.get('port'))
});
//1 - Invocamos express
const express = require('express');
const app = express();

//2-    setamos urlencoded para captura los datos del fomrulario
app.use(express.urlencoded({extended:false}));
app.use(express.json()); //para usar el archivo JSON

//3 - Invocamos dotenv
const dotenv = require('dotenv');
const { path } = require('express/lib/application');
dotenv.config({path:'./env/.env'});

//4 - Seteamos el Directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5 - Establecemos el motor de platillas
app.set('view engine', 'ejs');

//6 - invocamos a bcryptjs para encriptar los passwords
const bcryptjs = require('bcryptjs');

//7 - Variables de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

//8 - Invocamos el modulo de conexion a la base de datos
const connection = require('./database/db');
const res = require('express/lib/response');

// console.log(__dirname)

//9 - Estableceindo las rutas
//Login
app.get('/login', (req, res) => {
    res.render('login'); //Usando plantillas
})

//Register
app.get('/register', (req, res) => {
    res.render('register'); //Usando plantillas
})

// Inforrmacion
app.get('/info', (req, res)=>{
    res.render('info');
})

//regulaacion migratoria
app.get('/mr', (req, res)=>{
    res.render('mr');
})

//Educacion
app.get('/education', (req, res)=>{
    res.render('education')
})

//Ttrabajo (JOB)
app.get('/job', (req, res)=>{
    res.render('job')
})

//10 - Creando el registro
app.post('/register', async (req, res)=>{
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol;
    const pass = req.body.pass;
    let passwordHaaah = await bcryptjs.hash(pass, 8);
    connection.query('INSERT INTO users SET ?', {user:user, name:name, rol:rol, pass:passwordHaaah}, async(error, resuluts)=>{
        if(error) {
            console.log(error);
        } else {
            // res.send('REGISTRO COMPLETADO CON EXITO!!') 
            res.render('register',{
                alert: true,
                alertTitle: "Registration",
                alertMessage: "¡Successful Registation!",
                alertIcon: 'success',
                showConfirmButton:false,   
                timer: 1500,
                ruta:''
            })
        }
    })
})

//11 - Autenticacion
app.post('/auth', async (req, res) =>{
    const user = req.body.user;
    const pass = req.body.pass;
    let passwordHaaah = await bcryptjs.hash(pass,8);
    if(user && pass){
        connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, resuluts)=>{
            if(resuluts.length == 0 || !(await bcryptjs.compare(pass, resuluts[0].pass))){
                res.render('login',{
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "¡Usuario y/o password incorrectas!",
                    alertIcon: 'error',
                    showConfirmButton:true,   
                    timer: false,
                    ruta:'login'
                });
            }else{
                req.session.loggedin = true;
                req.session.name = resuluts[0].name
                res.render('login',{
                    alert: true,
                    alertTitle: "Conexión Exsitosa",
                    alertMessage: "¡LOGIN CORRECTO!",
                    alertIcon: 'success',
                    showConfirmButton:false,   
                    timer: 1500,
                    ruta:''
                });
            }
        })
    }else{
        res.render('login',{
            alert: true,
            alertTitle: "Advertencia",
            alertMessage: "¡Por favor ingrese un usuario y contraseñas correctas!",
            alertIcon: 'warning',
            showConfirmButton:true,   
            timer: false,
            ruta:'login'
        });
    }
})

//12 - Autenticacion en las paginas
app.get('/', (req, res)=>{
    if(req.session.loggedin){
        res.render('index',{
            login: true,
            name: req.session.name
        });
    }else{
        res.render('index',{
            login: false,
            name: 'Debe iniciar sesión'
        });
    }
})

//13 Logout
app.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})


app.listen(3000, (req, res)=>{
    console.log('SERVER IS RUNNIG IN http://localhost:3000');
})
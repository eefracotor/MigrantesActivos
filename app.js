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


// Inforrmacion
app.get('/info', (req, res)=>{
    res.render('info');
})

//regulaacion migratoria
app.get('/mr', (req, res)=>{
    if(req.session.loggedin){
        res.render('mr',{
            login: true,
            user : req.session.user,
            name: req.session.name
        });
    }else{
        res.render('mr',{
            login: false,
            // name: 'Debe iniciar sesión'
        });
    }
})

//Educacion
app.get('/education',(req, res)=>{
    if(req.session.loggedin){
        res.render('education',{
            login: true,
            user : req.session.user,
            name: req.session.name
        });
    }else{
        res.render('education',{
            login: false,
            // name: 'Debe iniciar sesión'
        });
    }
})

// Aba Emprego- Trabajo-JOB carga a lista de vagas postadas
app.get('/job', (req, res)=>{
    connection.query('SELECT v.* ,e.nombre, e.description FROM vagas v INNER JOIN empresa as e ON e.id = v.id_empresa', async(error, resuluts)=>{
        if(error){
            console.log(error)
        }else{
            // console.log(resuluts);
            if(req.session.loggedin){
                res.render('job',{
                    login: true,
                    user : req.session.user,
                    name: req.session.name,
                    resuluts:resuluts,
                    nombre: resuluts[0].nombre,
                    descrip: resuluts[0].description
                });
            }else{
                res.render('job',{
                    login: false,
                    resuluts:resuluts,
                    nombre: resuluts[0].nombre,
                    descrip: resuluts[0].description
                    // name: 'Debe iniciar sesión'
                });
            }
            // res.render('job', {
            //     resuluts:resuluts,
            //     nombre: resuluts[0].nombre,
            //     descrip: resuluts[0].description
            // })

        }
    })
})

// Para entrar noperfil da pesooa logada
app.get('/profile', (req, res)=>{
    if(req.session.loggedin){
        const user = req.session.user;
        connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, resuluts)=>{
            if(error){
                console.log("error "+ error.message)
            }else if(req.session.rol == "migrante"){
                req.session.user = resuluts[0].user;
                req.session.name = resuluts[0].name;
                req.session.email = resuluts[0].email;
                    res.render('profile',{
                        login: true,
                        user: req.session.user,
                        name: req.session.name,
                        email: req.session.email
                    });
    
                }else{
                    //cargar info BD 
                    const id = resuluts[0].id;
                    connection.query('SELECT v.* ,e.nombre, e.description FROM vagas v INNER JOIN empresa as e ON e.id = v.id_empresa AND e.id = ?', [id], async(error, resuluts2)=>{
                                if(error){
                                    console.log(error)
                                }else{
                                    console.log(id);
                                    console.log(resuluts2);
                                    res.render('profile-emp', {
                                        login: true,
                                        empresa: true,
                                        user: req.session.user,
                                        name: req.session.name,
                                        resuluts:resuluts2,
                                        nombre: resuluts2[0].nombre,
                                        descrip: resuluts2[0].description
                                    })
                        
                                }
                            })
                    // res.render('profile-emp',{
                    //     login: true,
                    //     user: req.session.user,
                    //     name: req.session.name});
    
                }
        })
    } else {
        res.render('login',{
            alert: true,
            alertTitle: "Error",
            alertMessage: "¡Necesitas esta reguistrado para poder ver este contenido!",
            alertIcon: 'error',
            showConfirmButton:true,   
            timer: false,
            ruta:'login'
        });
    }
})


//Register
app.get('/register', (req, res) => {
    res.render('register'); //Usando plantillas
})

// Perfil de empresa
// app.get('/profile-emp', (req, res)=>{
//     res.render('profile-emp')
// })

// Editar Perfil de empresa
app.get('/edit-eprofile', (req, res)=>{
    res.render('edit_emp')
})

// Teste apra motrar motrar perfil da empresa
// app.get('/profile', (req, res)=>{
//     connection.query('SELECT v.* ,e.nombre, e.description FROM vagas v INNER JOIN empresa as e ON e.id = v.id_empresa AND e.id = ?', 2, async(error, resuluts)=>{
//         if(error){
//             console.log(error)
//         }else{
//             // console.log(resuluts);
//             res.render('profile-emp copy', {
//                 resuluts:resuluts,
//                 nombre: resuluts[0].nombre,
//                 descrip: resuluts[0].description
//             })

//         }
//     })
// });

// ENtrar no perfil da empresa
app.get('/profile:id', (req, res)=>{  
    const id = req.params.id;
    if(req.session.loggedin){
                const user = req.session.user;
                connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, resuluts)=>{
                    if(error){
                        console.log("error "+ error.message)
                    }else {
                        connection.query('SELECT v.* ,e.nombre, e.description FROM vagas v INNER JOIN empresa as e ON e.id = v.id_empresa AND e.id = ?', [id], async(error, resuluts2)=>{
                            if(error){
                                console.log(error)
                            }else{
                                // console.log(resuluts);
                                req.session.user = resuluts[0].user;
                                res.render('profile-emp', {
                                    login: true,
                                    empresa: false,
                                    user: req.session.user,
                                    name: req.session.name,
                                    resuluts:resuluts2,
                                    nombre: resuluts2[0].nombre,
                                    descrip: resuluts2[0].description
                                })
                    
                            }
                        })
                }
            })
            }else{
                connection.query('SELECT v.* ,e.nombre, e.description FROM vagas v INNER JOIN empresa as e ON e.id = v.id_empresa AND e.id = ?', [id], async(error, resuluts)=>{
                    if(error){
                        console.log(error)
                    }else{
                        // console.log(resuluts);
                        res.render('profile-emp', {
                            login: false,
                            empresa: false,
                            resuluts:resuluts,
                            nombre: resuluts[0].nombre,
                            descrip: resuluts[0].description
                        })
            
                    }
                })
                
            };
    
})

// Editar Perfil de usuario migrante
app.get('/edit-mprofile', (req, res)=>{
    res.render('edit-mig')
})

// Listado de vagas
app.get('/vagas', (req, res)=>{
    res.render('vagas')
})

// creacion de vagaas
app.get('/add-vagas', (req, res)=>{
    res.render('add_vaga')
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
            if(rol === 'migrante'){
                connection.query('SELECT * FROM users WHERE user = ?', [user], async (error, resuluts)=>{
                    const id = resuluts[0].id;
                    connection.query('INSERT INTO migrantes SET ?', {nombre:name, apellido:'', fecha_nac:'', pais_nac:'', nacionalidad:'', pais_res:'',  estado_res:'', ciudad_res:'', escolaridad:'', id_user:id}, async(error, resuluts)=>{
                        if(error){
                            console.log(error)
                        }
                    })
                })
            }
            res.render('register',{
                alert: true,
                alertTitle: "Registration",
                alertMessage: "¡Successful Registation!",
                alertIcon: 'success',
                showConfirmButton:false,   
                timer: 1500,
                ruta:'login'
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
                req.session.id = resuluts[0].id
                req.session.user = resuluts[0].user;
                req.session.rol = resuluts[0].rol;
                if(req.session.rol === 'migrante') {
                    // crear o definir pantala de inicio para migrantes
                    res.render('login',{
                        alert: true,
                        alertTitle: "Conexión Exitosa",
                        alertMessage: "¡LOGIN CORRECTO!",
                        alertIcon: 'success',
                        showConfirmButton:false,   
                        timer: 1500,
                        ruta:''
                    });                    
                }else{
                    // crear pantalla de inicio para emopresas
                }
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
            user : req.session.user,
            name: req.session.name
        });
    }else{
        res.render('index',{
            login: false,
            // name: 'Debe iniciar sesión'
        });
    }
})

//13 Logout
app.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
})


// Teste python
app.get('/python', (req, res)=>{
    connection.query('SELECT COUNT(sexo) cant, sexo FROM migrantes GROUP BY sexo;', async (error, resuluts) =>{
        if(error){
            console.log(error)
        }else{
            res.render('inicio-emp', {resuluts: resuluts})
            console.log(resuluts)
        }
    })
})

app.listen(3000, (req, res)=>{
    console.log('SERVER IS RUNNIG IN http://localhost:3000');
});

module.exports = connection;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error)=>{
    if(error){
        console.log('El error de la conexión es: '+error);
        return;
    }
    console.log('Conectado a la base de datos!!!')
});
<<<<<<< HEAD

module.exports = connection;
=======

module.exports = connection;

>>>>>>> b7969efe200d69e86f6ec7f5a6fb77dd69152959

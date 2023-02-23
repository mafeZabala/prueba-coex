const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'12345',
    database: 'creditos'
})
connection.connect((error)=>{
    if(error){
        console.error(error.message)
    } else{
        console.log("La conexion es correcta")
    }
    
})

connection.end()
 


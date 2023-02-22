const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'12345',
    database: 'creditos'
})
connection.connect((error)=>{
    if(error){
        throw error
    } else{
        console.log("La conexion es correcta")
    }
    
})

connection.end()
 


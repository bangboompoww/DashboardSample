const express = require('express')
const mysql = require('mysql')
const app = express()

const SELECT_ALL_RESULT_QUERY = 'SELECT * FROM transactionresult'
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'Client_Pagination'
})

connection.connect(err =>{
    if(err){
        return err
    }
})

console.log(connection);


app.get('/', (req,res) => {
    connection.query(SELECT_ALL_RESULT_QUERY, (err,results) => {
        if(err){
            return res.send(err)
        } else{
            return res.json({
                data:results
            })
        }
    })
})


app.listen(3000, () => {
    console.log('port is listening');
    
})

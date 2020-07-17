const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()

const SELECT_ALL_RESULT_QUERY = 'SELECT * FROM transactionresultt'
const SELECT_ALL_TRANSACTION_QUERY = 'SELECT * FROM transaction'

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

app.use(cors());

console.log(connection);


app.get('/modalresults', (req,res) => {
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
app.get('/transaction', (req,res) => {
    connection.query(SELECT_ALL_TRANSACTION_QUERY , (err,success) => {
        if(err){
            return res.send(err)
        } else {
            res.json({
                data: success
            })
        }
    })
})


app.listen(3000, () => {
    console.log('port is listening');
    
})

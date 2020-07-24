const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())

app.use(cors());
const SELECT_ALL_RESULT_QUERY = `SELECT * FROM transactionresult`
const SELECT_ALL_TRANSACTION_QUERY = `SELECT * FROM transactions `

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'Client_Pagination'
})

mysqlConnection.connect((err) => {
    if(!err){
        console.log('connection success');
    } else{
        ('failed')
    }
})



// joined table
app.get('/results', (req,res) => {
    mysqlConnection.query(SELECT_ALL_RESULT_QUERY, (err,results) => {
        if(!err){
            res.send(results)
        } else{
           console.log(err);
        }
    })
})
app.get('/results/:id', (req,res) => {
    mysqlConnection.query('SELECT * FROM transactions WHERE id =  ?', [req.params.id], (rows,err) => {
            if(!err){
                console.log(rows);
            }else{
                console.log(err);
            }
        })
 })


app.get('/transaction', (req,res) => {
    mysqlConnection.query(SELECT_ALL_TRANSACTION_QUERY , (err,success) => {
        if(err){
            return res.send(err)
        } else {
            res.json({
                data: success
            })
        }
    })
})

// the joined table


app.listen(3000, () => {
    console.log('port is listening');
    
})

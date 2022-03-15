//informações para conectar ao database

const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '147852369',
  database: 'agenda-petshop'

})

module.exports = conexao

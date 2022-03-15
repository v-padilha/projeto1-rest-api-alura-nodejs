// arquivo de configurações do app/servidor

//projeto já conta com nodemon, de modo a não precisar reiniciar o servidor a cada alteração.
//express instalado para fazer a rota.
//chamando a biblioteca

//bibliotecas externas
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')


//executa o express recém importado
module.exports = () => {
  const app = express()

  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())

  //consign para organizar os arquivos
  consign()
    .include('controllers')
    .into(app)

    return app
}

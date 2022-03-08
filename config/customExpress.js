// arquivo de configurações do app/servidor



//projeto já conta com nodemon, de modo a não precisar reiniciar o servidor a cada alteração.
//express instalado para fazer a rota.
//chamando a biblioteca


const express = require('express')
const consign = require('consign')


//executa o express recém importado
module.exports = () => {
  const app = express()

  //consign para organizar os arquivos
  consign()
    .include('controllers')
    .into(app)

    return app
}

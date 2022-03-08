//controlando as rotas e o que cada uma deve fazer
module.exports = app => {
  app.get('/atendimentos', (req,res) => res.send('Você está na rota de atendimentos e get') )
}

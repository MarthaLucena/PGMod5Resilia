// Importando o packages
import express from 'express'

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// importando os controllers
import parceirosController from './controllers/parceirosController.js'

parceirosController.rotas(app)

export default app

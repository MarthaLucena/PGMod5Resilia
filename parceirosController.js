// Importa o bd.js para poder usar o banco de dados simulado
import ParceirosDAO from "../DAO/ParceirosDAO.js"
import { bdParceiros } from "../bd.js"
import Parceiros from "../models/Parceiros.js"

class parceirosController {
    static rotas(app){
        // Rota para o recurso parceiros
        app.get('/parceiros', parceirosController.listar)
        app.post('/parceiros', parceirosController.inserir)
        app.post("/parceiros/:nome", parceirosController.filtrarPorNome)
        app.delete("/parceiros/:nome", parceirosController.apagarParceiro)
        app.put("/parceiros/:id/:id", parceirosController.atualizarParceiros)
    }

    // GET -- Listar todos os usuários
    static async listar(req, res){
        const resultado = await ParceiroDAO.listar()
        res.send(resultado)
    }

    // POST  --  Criar um novo usuário
    static async inserir(req, res) {
        const parceiros = {
            nome: req.body.nome,
            urlLogo: req.body.urlLogo,
            descricao: req.body.descricao      
    }

    if (!parceiros || !parceiros.nome || !parceiros.urlLogo || !parceiros.descricao) {
        res.status(400).send("Precisa passar as informações")
        return
    }


    const result = await ParceirosDAO.inserir(parceiros)


    if (result.erro) {
        res.status(500).send(result)
    }

    res.status(201).send({ "Mensagem": "parceiro criado com sucesso", "Novo parceiro: ": parceiros })
}



 // GET -- BUSCAR POR NOME
 static async filtrarPorNome(req, res){
    const parceiros = await ParceirosDAO.buscarPorNome(req.params.nome)

    if (!parceiros) {

        res.status(404).send("parceiro não encontrado")
    }

    res.status(200).send(parceiros)      
}


// DELETE -- Deletar um parceiro pelo nome

static async apagarParceiros(req, res){
    const parceiros = await ParceirosDAO.buscarPorNome(req.params.nome)

    if(!parceiros){
        res.status(404).send("Parceiro não encontrado")
        return
    }

    const result = await ParceirosDAO.deletar(req.params.nome)

    if(result.erro){
         res.status(400).send({ 'Mensagem': 'Parceiro não deletado' })
         return
    }

    res.status(200).send(result)
 }


// PUT -- Atualizar um parceiro
static async atualizarParceiros(req, res) {
    const id = await ParceirosDAO.buscarPorID(req.params.id)
    if (!id) {
        res.status(404).send('parceiro não encontrado')
        return
    }

    const parceiros = new Parceiros(req.body.nome, req.body.urlLogo, req.body.descricao)



    if (!parceiros || !parceiros.nome || !parceiros.urlLogo || !parceiros.descricao) {
        res.status(400).send("Precisa passar todas as informações")
        return
    }

    if (!Object.keys(parceiros).length) {
        res.status(400).send('O objeto está sem chave')
        return
    }

    const result = await ParceirosDAO.atualizar(req.params.id, parceiros)

    if (result.erro) {
        res.status(500).send('Erro ao atualizar o parceiro')
        return
    }

    res.status(200).send({ "Mensagem": "Dados atualizados", "Parceiro: ": parceiros })

} 
}

export default parceirosController
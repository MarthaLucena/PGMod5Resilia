import db from "../infra/db.js";

class ParceirosDAO {

    // GET -- Listar todos os parceiros
    static listar() {
        const query = "SELECT * FROM PARCEIROS"
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err)
                }
                resolve(rows)
            })
        })
    }
     
    // POST  --  Criar um novo parceiro
    static inserir(parceiros){
         const query = `INSERT INTO PARCEIROS (nome, urlLogo, descricao) VALUES (?, ?, ?)`;

         return new Promise((resolve, reject) => {
             db.run(query, [usuario.nome, usuario.urlLogo, usuario.descricao], (err) =>{
                if (err){
                     reject({
                        mensagem: "Erro ao inserir o paceiro",
                        error:err,
                   });
               }
              resolve(parceiros);
           });
       });
    }
    
    // GET -- BUSCAR POR NOME
    static buscarPorNome(nome) {
        const query = "SELECT * FROM PARCEIROS WHERE nome = ?";
        return new Promise((resolve, reject) => {
          db.get(query, [nome], (err, row) => {
            if (err) {
              reject(false);
            }
            resolve(row);
          });
        });
      }

    static buscarPorID(id) {
        const query = "SELECT * FROM PARCEIROS WHERE id = ?";
        return new Promise((resolve, reject) => {
          db.get(query, [id], (err, row) => {
            if (err) {
              reject(false);
            }
            resolve(row);
          });
        });
      }

  // PUT  --  
  static atualizar(id, parceiros){
    const query =
    "UPDATE PARCEIROS SET nome = ?, urlLogo = ?, descricao = ? WHERE id = ?";
    return new Promise((resolve, reject) =>{
      db.run(
        query,
        [parceiro.nome, parceiro.urlLogo, parceiro.descricao, id],
        (err)=>{
          if (err){
            reject({
              mensagem: "Erro ao atualizar o parceiro",
              erro: err,
            });
          }
          resolve({
            mensagem: "Parceiro atualizado com sucesso"
          });
        }
      );


    });
  }   

    // DELETE -- Deletar um parceiro pelo nome
    static deletar(nome){
        const query = "DELETE FROM PARCEIROS WHERE nome = ?";
        return new Promise((resolve,reject) =>{
          db.run(query, [nome], (err) =>{
            if(err){
              reject({
                mensagem: "Erro ao deletar o parceiro",
                erro: err,
              });
            }
            resolve({mensagem: "Parceiro deletado com sucesso", nome: nome});
          });
        });
      }   
}

export default ParceirosDAO
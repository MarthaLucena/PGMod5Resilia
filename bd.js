import Parceiros from './models/parceiros.js'

// Cria vários objetos e os adiciona a um array para simular uma lista de objetos

const bdParceiros = []

// Cria um objeto do tipo parceiro e adiciona a lista de Parceiros
const parceiros = new Parceiros('Nome', 'urlLogo', 'descricao')
bdParceiros.push(parceiros)
// Cria um objeto do tipo parceiro e adiciona a lista de Parceiros
const parceiros2 = new Parceiros('Nome 2', 'urlLogo 2', 'descricao 2')
bdParceiros.push(parceiros2)


// Exporta as listas de objetos
export { bdParceiros }
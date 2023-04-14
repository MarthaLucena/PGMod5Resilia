/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3  from "sqlite3";
import db from "./db.js";

sqlite3.verbose()

//==== Parceiros
const PARCEIROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PARCEIROS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "URLLOGO" varchar(64),
    "DESCRICAO" varchar(300)
  );`;

const ADD_PARCEIROS_DATA = `
INSERT INTO PARCEIROS (ID, NOME, URLLOGO, DESCRICAO)
VALUES 
    (1, 'Prefeitura do Rio de Janeiro', 'https://drive.google.com/file/d/1-NRM6CaDzo4Mt2rSASEfjLhOW1Z6MGYg/view?usp=sharing', 'Instituição sede do poder executivo do município do Rio de Janeiro.'),
    (2, 'Senac', 'https://drive.google.com/file/d/1-BL20HcOgWdbXGOshXluuXJtBvyc8wzF/view?usp=sharing', 'Desde 1946, o Serviço Nacional de Aprendizagem Comercial – Senac é o principal agente de educação profissional voltado para o Comércio de Bens, Serviços e Turismo do País.'),
    (3, 'Resilia Educação', 'https://drive.google.com/file/d/1-ORMf-V4rQC5kQoeZHkcLySgwiL3JEb1/view?usp=sharing', 'A Resilia é uma empresa que impacta vidas através da educação enquanto formam profissionais para o setor que mais cresce no mundo: tecnologia. Unindo conhecimento, hábitos de excelência e diversidade, mais do que alunos, formam Resilientes.'),
    (4, 'Petrobrás', 'https://drive.google.com/file/d/1-N9GqjsQ48A4_6T_fYSOfUFHP8QSH6pU/view?usp=sharing', 'A Petrobrás é uma empresa estatal brasileira que atua principalmente na exploração e produção de petróleo e seus derivados e de gás natural.'),
    (5, 'Banco do Brasil', 'https://drive.google.com/file/d/1-F_amE2z2eSiS9wgB98LuY2wsT-tUbkB/view?usp=sharing', 'O Banco do Brasil é um banco brasileiro, constituído na forma de sociedade de economia mista, com participação do Governo Federal do Brasil em 50% das ações. É um dos cinco bancos estatais do governo brasileiro, tendo como acionistas, para além da União, capital estrangeiro, livre capital nacional e ações em tesouraria.'),
    (6, 'Eletrobras', 'https://drive.google.com/file/d/1-IphyCQpMznZW3pHJ_ihaJR38xhDZqom/view?usp=sharing', 'A Eletrobras é uma empresa brasileira de capital aberto que atua como uma holding, dividida em geração e transmissão, criada em 1962 inicialmente como uma Estatal, para coordenar todas as empresas do setor elétrico.')
`

function criaTabelaParceiros() {
    db.run(PARCEIROS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de parceiros");
    });
}


function populaTabelaParceiros() {
    db.run(ADD_PARCEIROS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de parceiros");
    });
}


db.serialize( ()=> {
    criaTabelaParceiros();
    populaTabelaParceiros();

});
/**
 * @format
 */
/*
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);*/

const express = require("express");
const app = express();
const connection = require("./database/database");
const bodyParser = require("body-parser");
const Avaliacao = require("./database/Avaliacao");
const Login = require("./database/Login");

//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Teste de resposta no Servidor
app.get("/",function(req,res){
    res.send("Projeto 5S");
});

//Conexão com Banco de Dados mysql
connection.authenticate()
    .then(function() {
        console.log("Conectado com o BD")
    })
    .catch(function(err) {
        console.log("msgErro");
    })
    .done();

function recebeDadosFront (){
app.get("/avaliacao",(req,res) =>{  //app.post
    var Form_id = "Avaliador1"; //req.body.Form_id;
    var Cost_center_id = "CC1"; //req.body.Cost_center_id;
    var Question_id_answer1 = 5; //req.body.Question_id_answer;
    var Question_id_answer2 = 3;
    var Question_id_answer3 = 1;
    var Question_id_answer4 = 3;
    var Question_id_answer5 = 2;
    var Question_id_answer = 2.8;

    res.send("Nota recebida! Form_id:" + Form_id + " Centro de Custo: " + Cost_center_id + "  Média 5S: " + Question_id_answer);
    //Envia a nota e descrição para o banco de dados
    Avaliacao.create({
        Form_id: Form_id,
        Cost_center_id: Cost_center_id,
        Question_id_answer1: Question_id_answer1,
        Question_id_answer2: Question_id_answer2,
        Question_id_answer3: Question_id_answer3,
        Question_id_answer4: Question_id_answer4,
        Question_id_answer5: Question_id_answer5,
        Answer_average: Question_id_answer

    });
});
return Question_id_answer;
}

var xxx = recebeDadosFront
console.log(xxx)

//Envia dados pro Front?? GENÉRICO
function enviaDadosFront (){
    app.get("/resultado",(req,res) => {
        Avaliacao.findAll( {raw: true, order:[
            ['id','DESC'] //DESC = decrescente || ASC = crescente
        ]}).then(avaliacao => {

        res.json({             //Manda todas as notas da avaliação para o front, em ordem (mais recente primeiro).No front, iremos Usar fetch aqui?*/
            avaliacao: avaliacao
            });
        }); 
    });
    
}

//Servidor
app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');
const { eAdmin } = require('./middlewares/auth');

app.use(express.json()); //configura o express para receber dados em json

//Configurado o cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});


//###ROTAS

//Middleware
app.get('/usuarios', eAdmin, (req, res) => {
    res.json({
        erro: false,
        mensagem: "Listar usuários"
    });
});

app.post('/login', (req, res) => {

    if (req.body.usuario === 'manoelps@live.com' && req.body.senha === '123456') {

        const { id } = 1; //recebe o id do usuario, vindo do banco de dados
        var privateKey = process.env.SECRET; //Esta chave privada deve ser unica no projeto, para que nenhum projeto na internet o tenha
        //cria o token, passando como parametro, o ID do usuario + 
        var token = jwt.sign({ id }, privateKey, {
            //expiresIn: 600, // 10minutos
            expiresIn: '7d' //7d = 7 dias coloca o tempo de vida do token, se usar 600s (em segundos) = 10 minutos
        });

        return res.json({
            erro: false,
            mensagem: "Login válido",
            token: token
        });
    } else {
        return res.json({
            erro: true,
            mensagem: "Login ou senha Incorreta",
        });
    }

});

app.listen(8081, () => {
    console.log("Server On: http://localhost:8081");
});
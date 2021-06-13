const jwt = require('jsonwebtoken');
const { promisify } = require("util"); // importa funcao para converter funcoes em promessas
require('dotenv').config();

//FANÇÃO para verifica se o token é valido [Midlleware]
async function validarToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const [, token] = authHeader.split(' '); //faço a divisao do header pelo espaço entre eles

    // return res.json({
    //     authHeader: token
    // });

    //verifica se existe um token
    if (!token) {
        return res.json({
            erro: true,
            mensagem: "Erro: necessário realizar o login!"
        });
    }

    try {
        //converte em uma promessa
        const decode = await promisify(jwt.verify)(token, process.env.SECRET); //verifica se o token é valido
        req.userId = decode.id; //recupera o ID req.NOME_QUE_QUISER = decode.id (este id é o que foi passado no login quando gerou o token)

        return next();
    } catch (err) {
        return res.json({
            erro: true,
            mensagem: "Erro: login ou senha inválida!"
        });
    }

}

//exporto a funcao de validar login para conseguir usar em outras rotas e arquivos
module.exports = {
    eAdmin: validarToken
}
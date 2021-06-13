# JWT-com-nodejs

SEQUENCIA DO PROJETO

=> Criar Projeto: 
npm init

=> Gerenciar as requisições, rotas e URLs [https://www.npmjs.com/package/express]: 
npm install express --save

=> Rodar o projeto: 
node app.js ou nodemon app.js

=> Instalar a dependente para JWT, [https://www.npmjs.com/package/jsonwebtoken]: 
npm install jsonwebtoken --save

=> Gerencia variáveis de ambiente [https://www.npmjs.com/package/dotenv]: 
npm install dotenv --save

=> Permitir acesso a API [https://www.npmjs.com/package/cors]: 
npm install cors --save


Consumindo a API:

ROTAS:

[POST] '/login' //Fazer login

{
    "usuario": "manoelps@live.com",
    "senha": "123456"
}


[GET] '/usuarios' //Listar usuarios

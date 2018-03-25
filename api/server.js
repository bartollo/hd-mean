// IMPORTAÇÃO DE MODULO
var express = require('express')
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

// CONSECTA BD
//mongoose.connect('mongodb://localhost:27017/mean');
mongoose.connect('mongodb://unifacs:unifacs@ds119129.mlab.com:19129/bartollo');

// CONFIGURA API
var api = express();
api.use(cors());
api.use(bodyParser.json());

// IMPORTA CONTROLLERS
var ControllerChamado = require('./chamados/controller');
var ControllerUsuario = require('./usuarios/controller');

// ROTAS AUTENTICÃO
api.post("/cadastre_se", ControllerUsuario.cadastre_se);
api.post("/autenticar", ControllerUsuario.autenticar);

// VERIFICA AUTENTICAÇÃO
api.use(ControllerUsuario.checkLogado);

// ROTAS CONTATO
api.post("/chamados", ControllerChamado.cadastrarChamado);
api.get("/chamados/usuario/:autor", ControllerChamado.listarChamadoPorUsuario);
api.get("/chamados", ControllerChamado.listarChamados);
api.get("/chamados/:id", ControllerChamado.listarChamadoPorId);
api.put("/chamados/:id", ControllerChamado.atualizarChamado);
api.delete("/chamados/:id", ControllerChamado.removerChamado);

// ROTAS USUÁRIOS
api.post("/usuarios", ControllerUsuario.cadastrarUsuario);
api.get("/usuarios", ControllerUsuario.listarUsuarios);
api.get("/usuarios/:id", ControllerUsuario.listarUsuarioPorId);
api.put("/usuarios/:id", ControllerUsuario.atualizarUsuario);
api.delete("/usuarios/:id", ControllerUsuario.removerUsuario);

// PORTA DO SERVIDOR
api.listen(3000, function(){
	console.log("Servidor rodando na porta 3000!");
});
var Chamado = require('./model');

var cadastrarChamado = function(req, res) {

	var chamado = req.body;

	new Chamado( chamado ).save(function(error, data){

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao cadastrar! ' + error.message
			});
			
		} else {
			res.status(201).json({
				success: true,
				message: 'Cadastro realizado com sucesso!',
				data: data
			});
		}

	});

}

var listarChamados = function(req, res) {
	Chamado.find(function(error, data){

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao listar!'
			});
			
		} else if (!data) {
			res.status(404).json({
				success: false,
				message: 'Nenhum registro encontrado!'
			});
		} else {			
			res.status(200).json({
				success: true,
				message: 'Registro encontrado com sucesso!',
				data: data
			});
		}


	});
}

var listarChamadoPorId = function(req, res) {

	var id = req.params.id;

	Chamado.findById(id, function(error, data){

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao listar por id!'
			});
			
		} else if (!data) {
			res.status(404).json({
				success: false,
				message: 'Registro não encontrado!'
			});
		} else {			
			res.status(200).json({
				success: true,
				message: 'Registro encontrado com sucesso!',
				data: data
			});
		}


	});

}

var listarChamadoPorUsuario = function(req, res) {

	var _autor = req.params.autor;

	Chamado.find({autor:_autor},function(error, data){

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao listar por autor!'
			});
			
		} else if (!data) {
			res.status(404).json({
				success: false,
				message: 'Registros não encontrados!'
			});
		} else {			
			res.status(200).json({
				success: true,
				message: 'Registros encontrados com sucesso!',
				data: data
			});
		}


	});

}

var atualizarChamado = function(req, res) {

	var query = {_id: req.params.id};
	var chamado = req.body;

	Chamado.findOneAndUpdate(query, chamado, function(error, data){

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao atualizar chamado! ' + error.message
			});
			
		} else {			
			res.status(200).json({
				success: true,
				message: 'Chamado atualizado com sucesso!',
				data: data
			});
		}


	});

}

var removerChamado = function(req, res) {

	var query = {_id: req.params.id};
	var chamado = req.body;	

	Chamado.findOneAndRemove(query, chamado, function(error, data) {

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao remover chamado! ' + error.message
			});
			
		} else {			
			res.status(200).json({
				success: true,
				message: 'Chamado removido com sucesso!',
				data: data
			});
		}


	});

}




exports.listarChamadoPorUsuario = listarChamadoPorUsuario;
exports.cadastrarChamado = cadastrarChamado;
exports.listarChamados = listarChamados;
exports.listarChamadoPorId = listarChamadoPorId;
exports.atualizarChamado = atualizarChamado;
exports.removerChamado = removerChamado;
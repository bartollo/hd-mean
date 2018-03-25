var Contato = require('./model');

var cadastrarContato = function(req, res) {

	var contato = req.body;

	new Contato( contato ).save(function(error, data){

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

var listarContatos = function(req, res) {
	Contato.find(function(error, data){

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

var listarContatoPorId = function(req, res) {

	var id = req.params.id;

	Contato.findById(id, function(error, data){

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

var atualizarContato = function(req, res) {

	var query = {_id: req.params.id};
	var contato = req.body;

	Contato.findOneAndUpdate(query, contato, function(error, data){

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao atualizar contato! ' + error.message
			});
			
		} else {			
			res.status(200).json({
				success: true,
				message: 'Contato atualizado com sucesso!',
				data: data
			});
		}


	});

}

var removerContato = function(req, res) {

	var query = {_id: req.params.id};
	var contato = req.body;	

	Contato.findOneAndRemove(query, contato, function(error, data) {

		if (error) {

			res.status(400).json({
				success: false,
				message: 'Erro ao remover contato! ' + error.message
			});
			
		} else {			
			res.status(200).json({
				success: true,
				message: 'Contato removido com sucesso!',
				data: data
			});
		}


	});

}



exports.cadastrarContato = cadastrarContato;
exports.listarContatos = listarContatos;
exports.listarContatoPorId = listarContatoPorId;
exports.atualizarContato = atualizarContato;
exports.removerContato = removerContato;
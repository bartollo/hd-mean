var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contatoSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	telefone: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}

});

var Contato = mongoose.model('contatos', contatoSchema);

module.exports = Contato;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chamadoSchema = new Schema({
	titulo: {
		type: String,
		required: true
	},
	autor: {
		type: String,
		required: true
	},
	descricao: {
		type: String,
		required: true
	},
	status:{
		type: String,
		required: true
	}

});

var Chamado = mongoose.model('chamados', chamadoSchema);

module.exports = Chamado;
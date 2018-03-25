app.config(function($routeProvider) {

	$routeProvider.when("/chamados/listar", {

		templateUrl: "chamados/listar.html",
		controller: "ControllerListarChamado"
	});


	$routeProvider.when("/chamados/listar_user", {

		templateUrl: "chamados/listar_user.html",
		controller: "ControllerListarChamado"
	});

	$routeProvider.when("/chamados/cadastrar", {
		templateUrl: "chamados/cadastrar.html",
		controller: "ControllerCadastrarChamado"
	});

	$routeProvider.when("/chamados/editar/:id", {
		templateUrl: "chamados/editar.html",
		controller: "ControllerEditarChamado"
	});

});
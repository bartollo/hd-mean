app.config(function($routeProvider) {

	$routeProvider.when("/", {

		templateUrl: "geral/login.html",
		controller: "ControllerLogin"
	});

	$routeProvider.when("/login", {

		templateUrl: "geral/login.html",
		controller: "ControllerLogin"
	});

	$routeProvider.when("/cadastre_se", {
		templateUrl: "geral/cadastre_se.html",
		controller: "ControllerCadastreSe"
	});

	$routeProvider.when("/home", {
		templateUrl: "geral/home.html"
	});

	$routeProvider.when("/home_user", {
		templateUrl: "geral/home_user.html"
	});

	$routeProvider.when("/logoff", {
		templateUrl: "geral/login.html",
		controller: "ControllerLogoff"
	});

	$routeProvider.otherwise({
		template: "<h1>Página não encontrada.</h1>"
	});

});
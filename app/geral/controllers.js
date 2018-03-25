app.controller("ControllerCadastreSe", function($scope, $http, $location){

	$scope.cadastrarUsuarios = function(usuario) {

		$http.post("http://localhost:3000/cadastre_se", usuario)
			.then(function(res){
				res = res.data;

				if (res.success) {

					alert(res.message);
					$location.path('/login');

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

});

app.controller("ControllerLogin", function($scope, $http, $location){

	$scope.login = function(usuario) {

		$http.post("http://localhost:3000/autenticar", usuario)
			.then(function(res){
				res = res.data;

				if (res.success) {

					localStorage.setItem("user_name", res.data.nome);
					localStorage.setItem("user_token", res.token);
					localStorage.setItem("user_perfil", res.data.perfil);

					if(res.data.perfil=='Administrador'){
						$location.path('/home');
					}else{
						$location.path('/home_user');
					}

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

});

app.controller("ControllerLogoff", function($location){

	localStorage.removeItem("user_name");
	localStorage.removeItem("user_token");
	localStorage.removeItem("user_perfil");
	$location.path('/login');

});

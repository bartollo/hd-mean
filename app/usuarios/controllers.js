app.controller("ControllerListarUsuario", function($scope, $http){

	$scope.listarUsuarios = function() {

		$http.get("http://localhost:3000/usuarios")
			.then(function(res){
				res = res.data;

				if (res.success) {

					$scope.usuarios = res.data;

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

	$scope.removerUsuario = function(usuario) {

		var confirma = confirm("Remover " + usuario.nome + "?");

		if (!confirma) return false;

		$http.delete("http://localhost:3000/usuarios/" + usuario._id)
			.then(function(res){
				res = res.data;

				if (res.success) {

					alert(res.message);
					$scope.listarUsuarios();

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

	$scope.listarUsuarios();

});

app.controller("ControllerCadastrarUsuario", function($scope, $http, $location){

	$scope.cadastrarUsuarios = function(usuario) {

		$http.post("http://localhost:3000/usuarios", usuario)
			.then(function(res){
				res = res.data;

				if (res.success) {

					alert(res.message);
					$location.path('/usuarios/listar');

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

});

app.controller("ControllerEditarUsuario", function($scope, $http, $location, $routeParams){

	$scope.obterUsuario = function() {

		$http.get("http://localhost:3000/usuarios/" + $routeParams.id)
			.then(function(res){

				res = res.data;				

				if (res.success) {

					$scope.usuario = res.data;

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});


	}

	$scope.editarUsuario = function(usuario) {

		$http.put("http://localhost:3000/usuarios/" + $routeParams.id, usuario)
			.then(function(res){
				res = res.data;

				if (res.success) {

					alert(res.message);
					$location.path('/usuarios/listar');

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

	$scope.obterUsuario();

});
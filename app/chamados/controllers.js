app.controller("ControllerListarChamado", function($scope, $http,$routeParams){

	$scope.listarChamados = function() {

		//console.log(localStorage.user_name);

		if(localStorage.user_perfil == 'Administrador'){

			$http.get("http://localhost:3000/chamados")
				.then(function(res){
					res = res.data;

					if (res.success) {

						$scope.chamados = res.data;

					} else {
						alert(res.message);
					}

				})
				.catch(function(error){
					console.log(error.message);
				});

		} else {

			$http.get("http://localhost:3000/chamados/usuario/"+localStorage.user_name)
				.then(function(res){
					res = res.data;

					if (res.success) {

						$scope.chamados = res.data;

						$location.path('/listar_user');
					

					} else {
						alert(res.message);
					}

				})
				.catch(function(error){
					console.log(error.message);
				});
		}

	}

	$scope.removerChamado = function(chamado) {

		var confirma = confirm("Remover " + chamado.nome + "?");

		if (!confirma) return false;

		$http.delete("http://localhost:3000/chamados/" + chamado._id)
			.then(function(res){
				res = res.data;

				if (res.success) {

					alert(res.message);
					$scope.listarChamados();

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

	$scope.listarChamados();

});

app.controller("ControllerCadastrarChamado", function($scope, $http, $location){

	$scope.cadastrarChamados = function(chamado) {

		chamado.autor = localStorage.user_name;

		$http.post("http://localhost:3000/chamados", chamado)
			.then(function(res){
				res = res.data;
				
				if (res.success) {

					alert(res.message);
					$location.path('/chamados/listar');

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

});

app.controller("ControllerEditarChamado", function($scope, $http, $location, $routeParams){

	$scope.obterChamado = function() {

		$http.get("http://localhost:3000/chamados/" + $routeParams.id)
			.then(function(res){

				res = res.data;				

				if (res.success) {

					$scope.chamado = res.data;

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});


	}

	$scope.editarChamado = function(chamado) {

		$http.put("http://localhost:3000/chamados/" + $routeParams.id, chamado)
			.then(function(res){
				res = res.data;

				if (res.success) {

					alert(res.message);
					$location.path('/chamados/listar');

				} else {
					alert(res.message);
				}

			})
			.catch(function(error){
				console.log(error.message);
			});

	}

	$scope.obterChamado();

});
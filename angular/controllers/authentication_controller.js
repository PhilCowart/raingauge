rainGaugeControllers.controller('AuthenticationCtrl', function($scope, $auth, $location, accountFactory) {


	$scope.login = function(provider){

		$auth.login( provider )
			.then(function onSuccess(response){
				console.log( response );
				$location.path( '/' );
			})
			.catch( function onError(response){
				$scope.errors = response.data;
			})
	}




});

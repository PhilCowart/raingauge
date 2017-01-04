rainGaugeControllers.controller('AuthenticationCtrl', function($scope, $auth, accountFactory) {


	$scope.authenticate = function(provider){

		$auth.login( provider )
			.then(function onSuccess(response){
				$location.path( '/' );
			})
			.catch( function onError(response){
				$scope.errors = response.data;
			})
	}

});

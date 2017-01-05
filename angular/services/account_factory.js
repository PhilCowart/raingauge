
rainGaugeFactories.factory('accountFactory', function($http, $auth, $q, $location, envService) {

	var account = {
		profile: [],
	};



	account.checkAccess = function( ){

		if( !$auth.isAuthenticated() ) {
			$location.path('/login');
			return;
		};

		var deferred = $q.defer();
	 	$http.get( envService.read('api') + '/user' )
		 	.then(function onSuccess(response){
		 		deferred.resolve(response.data);
		 		account.profile = response.data;
		 	})
		 	.catch(function onError(response){
		 		$auth.logout();
	 			deferred.reject('error');
		 		$location.path('/login');
		 	})
		 	
	 	return deferred.promise;
 	}



	return account;
});


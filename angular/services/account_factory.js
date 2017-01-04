
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
		 		console.log( response );
		 		deferred.resolve(response.data);
		 		account.profile = response.data;
				if( account.profile.client_id == null ){ $location.path( '/account/setup' ); }
				else if( account.profile.force_reset == true ){ $location.path( '/reset-password'); }
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


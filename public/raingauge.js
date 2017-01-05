'use strict'


var rainGaugeFactories = angular.module('rainGaugeFactories', []);
var rainGaugeDirectives = angular.module('rainGaugeDirectives', []);
var rainGaugeControllers = angular.module('rainGaugeControllers', []);
var rainGaugeFilters = angular.module('rainGaugeFilters', []);


var rainGauge = angular.module('rainGauge', [
	'ngRoute',
	'environment',
	'rainGaugeFactories',
	'rainGaugeDirectives',
	'rainGaugeControllers',
	'rainGaugeFilters',
	'satellizer',
])


.run( function($rootScope, $location) {

})


.controller('ApplicationCtrl', function( $scope, $auth ){


    // $scope.isAuthenticated = function() {
    //     return $auth.isAuthenticated();
    // };
   

})



rainGauge.config(['$locationProvider', function($locationProvider){

    // Angular 1.6 added a different hash-prefix
    $locationProvider.hashPrefix('');

}])


rainGauge.config(['$routeProvider', function($routeProvider, $rootScope, $route) {


    $routeProvider

  	.when('/', {
  		templateUrl: '/angular-views/dashboard.html',
  		controller: 'DashboardCtrl',
  		resolve: {
            myAccount: function(accountFactory){
                return accountFactory.checkAccess();
            },
        }
  	})


  	.when('/login', {
        templateUrl: '/angular-views/login.html',
        controller: 'AuthenticationCtrl',
  	})




}])


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

rainGaugeControllers.controller('DashboardCtrl', function($scope, $rootScope, $auth, accountFactory, myAccount) {

	$rootScope.account = myAccount;
	
	console.log( myAccount );

});

rainGauge.config(function($authProvider ) {

	$authProvider.loginUrl = 'http://localhost/api/authenticate';

});
 
rainGauge.config(function(envServiceProvider){

		envServiceProvider.config({
			domains: {
				development: ['localhost'],
				production: ['hipaa.com']
			},
			vars: {
				development: {
					api: 'http://localhost/api',
					name: 'LOCAL',
				},
				production: {
					api: '',
					name: 'Production',
				}
			}
		});

		envServiceProvider.check();

	});

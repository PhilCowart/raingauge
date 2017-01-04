
rainGauge.config(['$locationProvider', function($locationProvider){

    // Angular 1.6 added a different hash-prefix
    $locationProvider.hashPrefix('');

}])


rainGauge.config(['$routeProvider', function($routeProvider, $rootScope, $route) {


    $routeProvider

  	.when('/', {
        redirectTo: '/submissions'
  	})


  	.

}])

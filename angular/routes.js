
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

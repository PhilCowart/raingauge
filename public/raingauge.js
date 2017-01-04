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

])


.run( function($rootScope, $location) {

})


.controller('ApplicationCtrl', function( $scope ){
	$scope.dj = 'PHILthy';
})



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

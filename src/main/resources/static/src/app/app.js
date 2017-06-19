angular.module( 'ngBoilerplate', [
  'ui.router',
  //'720kb.datepicker',
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.login',
  'ngBoilerplate.dashboard',
  'ngBoilerplate.price',
  'displayPrice',
  'ngBoilerplate.inventory',
  'displayInventory',
  'mgcrea.ngStrap',
  'angularMoment'
 // 'ngBoilerplate.inventory',
  // 'ui.bootstrap.demo'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/login' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;


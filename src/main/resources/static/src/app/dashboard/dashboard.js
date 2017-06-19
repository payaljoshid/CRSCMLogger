
angular.module( 'ngBoilerplate.dashboard', [
  'ui.router',
  'plusOne'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'dashboard', {
    url: '/dashboard',
    views: {
      "main": {
        controller: 'DashboardCtrl',
        templateUrl: 'dashboard/dashboard.tpl.html'
      }
    },
    data:{ pageTitle: 'Dashboard' }
  });
})

.controller( 'DashboardCtrl', function DashboardCtrl( $scope, $state) { 
  $scope.navigateToPrice = function() {
        $state.go('price'); 
    };  
     $scope.navigateToInventory = function() {
         $state.go('inventory'); 
     };  

});




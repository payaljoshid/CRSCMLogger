 angular.module( 'ngBoilerplate.inventory', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'inventory', {
    url: '/inventory',
    views: {
      "main": {
        controller: 'InventoryCtrl',
        templateUrl: 'inventory/inventory.tpl.html'
      }
    },
    data:{ pageTitle: 'inventory' }
  });
})

.controller( 'InventoryCtrl', function InventoryCtrl( $scope, $state, $rootScope, $location, $http, LoginService ) {   
      
      $scope.filters={
          "startDate" :"",
          "endDate" : "",
          "hotelId" : "",
          "roomId" : "",
          "rateplanId" : "",
          "reservationId" : ""
        };
     
      $scope.displayinventorydetails = function() {
        
        $scope.myVar = !$scope.myVar;
        $scope.filters.startDate = $scope.filters.startDate ? moment($scope.filters.startDate).format('YYYY-MM-DD') : null;                
        $scope.filters.endDate = $scope.filters.endDate ? moment($scope.filters.endDate).format('YYYY-MM-DD') : null;
        $scope.filters.roomId = $scope.filters.roomId ? JSON.parse($scope.filters.roomId) : null;
        $scope.filters.hotelId = $scope.filters.hotelId ? JSON.parse($scope.filters.hotelId) : null;
        $scope.filters.rateplanId = $scope.filters.rateplanId ? JSON.parse($scope.filters.rateplanId) : null;
        $scope.filters.reservationId = $scope.filters.reservationId ? JSON.parse($scope.filters.reservationId) : null; 
        
          var config = {
                headers : {
                    'Content-Type': 'application/json;',
                    'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXlhbCIsImV4cCI6MTQ5NzM3Nzk4OH0.cgqdXGkZz3VavxtCGiofkQNs16toTvUte1lhjNdg2iayr98sESQQ4j5gVkyJP0TiUGqfzTm2C2RbJX1p9rz2jA'
                }
            };

         $http.post('http://136.243.4.199:8280/api/logger/cm/inventory/roomAvailability',  $scope.filters, config)
        .success(function (filters, status, headers, config) {
          console.log("success");
            $scope.data1 = filters;
        })
        .error(function (filters,headers) {
           console.log("err");
           $scope.roomid=$scope.filters.roomId;
        });

    };

     $scope.navigateToDashboard = function(){
        $state.go('dashboard');
     };
     $scope.reload = function(){
        $state.go('inventory');
     };
});



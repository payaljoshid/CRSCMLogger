 angular.module( 'ngBoilerplate.price', [
  'ui.router',
  'plusOne'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'price', {
    url: '/price',
    views: {
      "main": {
        controller: 'PriceCtrl',
        templateUrl: 'price/price.tpl.html'
      }
    },
    data:{ pageTitle: 'price' }
  });
})

.controller( 'PriceCtrl', function PriceCtrl( $scope, $state, $rootScope, $location, $http, LoginService ) {   
     
      $scope.filters={
         "startDate" :"",
          "endDate" : "",
        "hotelId" : "",
        "roomId" : "",
        "rateplanId" : "",
          "reservationId" : ""
     };

      $scope.displaypricedetails = function() {
            $scope.myVar = !$scope.myVar;
            $scope.filters.startDate = $scope.filters.startDate ? moment($scope.filters.startDate).format('YYYY-MM-DD') : null;
            $scope.filters.endDate = $scope.filters.endDate ? moment($scope.filters.endDate).format('YYYY-MM-DD') : null;
            $scope.filters.status = $scope.filters.status ? JSON.parse($scope.filters.status) : null;
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

         $http.post('http://136.243.4.199:8280/api/logger/cm/price/filter',  $scope.filters, config)
        .success(function (filters, status, headers, config) {
          console.log("success");
            $scope.data1 = filters;
        })
        .error(function (filters,headers) {
           console.log("err");

        });

    
     };    
     $scope.navigateToDashboard = function(){
        $state.go('dashboard');
     };
     $scope.reload = function(){
        $state.go('price');
     };
   
});




angular.module('displayPrice', [])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'display', {
    url: '/displayPrice',
    views: {
      "main": {
        controller: 'displayPriceCtrl',
        templateUrl: 'price/displayPrice.tpl.html'
      }
    },
    data:{ pageTitle: 'displayPrice' }
  });
})
.controller('displayPriceCtrl', function($scope,$state, $http , $location) {
  $scope.navigateToDashboard = function(){
        $state.go('dashboard');
     };
     $scope.navigateToPrice = function(){
        $state.go('price');
     };
      $scope.data1 = [
 {
   "date": "17-04-13",
   "hotelId": 12,
   "roomId": 13,
   "rateplanId": 16,
   "userId": 101,
   "userName": "Chirag",
   "uniqueId": 12,
   "status": "N/A",
   "price": {
     "Double": 1500,
     "Triple": 1500,
     "Quad": 1700,
     "Single": 1000,
     "Extra Infant": 100,
     "Extra Adult": 200,
     "Extra Child": 200
   },
   "createdDate": "2017-05-08@12:46:43.582+0530"
 },
 {
   "date": "17-04-11",
   "hotelId": 10,
   "roomId": 14,
   "rateplanId": 18,
   "userId": 101,
   "userName": "abc",
   "uniqueId": 13,
   "status": "N/A",
   "price": {
     "Double": 1500,
     "Triple": 1500,
     "Quad": 1700,
     "Single": 1000,
     "Extra Infant": 100,
     "Extra Adult": 200,
     "Extra Child": 200
   },
   "createdDate": "2017-05-08@12:46:43.582+0530"
 }]  ;
});
//$scope.orderProp = 'age';








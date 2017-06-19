
angular.module('displayInventory', [])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'displayinventory', {
    url: '/displayInventory',
    views: {
      "main": {
        controller: 'displayInventoryCtrl',
        templateUrl: 'inventory/displayInventory.tpl.html'
      }
    },
    data:{ pageTitle: 'displayInventory' }
  });
})
.controller('displayInventoryCtrl', function($scope,$state, $http , $location) {
  $scope.navigateToDashboard = function(){
        $state.go('dashboard');
     };
     $scope.navigateToInventory = function(){
        $state.go('inventory');
     };
      $scope.data1 = [{  
   "date": "17-03-14",
   "reservationId": 10,
   "revisionId": 1,
   "hotelId": 201,
   "roomId": 301,
   "occupancy": 17,
   "uniqueId": 11,
   "status": "Success",
   "type": "RESERVATION",
   "createdDate": "2017-05-04@17:42:00.800+0530"
 },
 {  
   "date": "17-03-14",
   "reservationId": 100,
   "revisionId": 100,
   "hotelId": 2022,
   "roomId": 301222,
   "occupancy": 1722,
   "uniqueId": 1122,
   "status": "Success",
   "type": "RESERVATION",
   "createdDate": "2017-05-04@17:42:00.800+0530"
 },
 {  
   "date": "17-03-14",
   "reservationId": 105,
   "revisionId": 155,
   "hotelId": 20155,
   "roomId": 30155,
   "occupancy": 1755,
   "uniqueId": 1155,
   "status": "Success",
   "type": "RESERVATION",
   "createdDate": "2017-05-04@17:42:00.800+0530"
 },
 {  
   "date": "17-03-14",
   "reservationId": 106,
   "revisionId": 16,
   "hotelId": 20166,
   "roomId": 30166,
   "occupancy": 1766,
   "uniqueId": 1166,
   "status": "Success",
   "type": "RESERVATION",
   "createdDate": "2017-05-04@17:42:00.800+0530"
 }
 ];
});
//$scope.orderProp = 'age';








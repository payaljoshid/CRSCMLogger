
angular.module( 'ngBoilerplate.login', [
  'ui.router',
  'plusOne'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'Login' }
  });
})


.controller( 'LoginCtrl', function LoginCtrl( $scope, $state,$http, $rootScope, LoginService ) {

$scope.data = {
  "userName" : "swathi",
  "password" : "joshi"
};


  $rootScope.title = "AngularJS Login Sample";
    $scope.formSubmit = function() {
      // if(LoginService.login($scope.email, $scope.password)) {
      //   $scope.error = '';
      //   $scope.email = '';
      //   $scope.password = '';
      //   $state.go('dashboard');
      // } else {
      //   $scope.error = "Incorrect username/password !";
      // } 

       var config = {
                headers : {
                    'Content-Type': 'application/json;',
                    'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXlhbCIsImV4cCI6MTQ5NzM3Nzk4OH0.cgqdXGkZz3VavxtCGiofkQNs16toTvUte1lhjNdg2iayr98sESQQ4j5gVkyJP0TiUGqfzTm2C2RbJX1p9rz2jA'
                }
            };

         $http.post('http://localhost:8280/login',  $scope.data, config)
        .success(function (data, status, headers, config) {
          console.log("success");
            $scope.data1 = data;
            $state.go('dashboard');
        })
        .error(function (data,headers) {
           console.log("err");

        });
    };  
})
.factory('LoginService', function() {
    var admin = "swathi@g.com";
    var pass = "123456";
    var isAuthenticated = false;
    
    return {
      login : function(email, password) {
        isAuthenticated = (email == admin && password == pass);
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  });



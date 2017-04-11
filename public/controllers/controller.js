var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    
    console.log("Hello World from controller");
    
    $http.get('/contactlist').then(function(response){

        console.log("Retrieved Data");

        $scope.contactlist = response.data;

    });

}]);

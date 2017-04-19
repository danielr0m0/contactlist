var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    
    console.log("Hello World from controller");
    
    var refresh= function(){
        $http.get('/contactlist').then(function(response){

            console.log("Retrieved Data");
            $scope.contactlist = "";

            $scope.contactlist = response.data;

        });
    }

    refresh();

    $scope.addContact = function() {
        console.log($scope.contact);
         $scope.contact._id="";
        $http.post('/contactlist', $scope.contact).then(function(response) {
            console.log(response);
            refresh();
        });
        deselect();
    };

    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactlist/' + id).then(function(response) {
            refresh();
        });
    };

    $scope.edit = function(id) {
        console.log(id);
        $http.get('/contactlist/' + id).then(function(response) {
            $scope.contact = response.data;
        });
    };  

    $scope.update = function() {
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response) {
            refresh();
            $scope.contact._id="";
        })
    };

    $scope.deselect = function() {
        if ($scope.contact._id !== null) {
        $scope.contact._id = null;
      }
         $scope.contact = null;
    }


}]);

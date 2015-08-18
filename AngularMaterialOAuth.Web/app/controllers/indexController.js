'use strict';
app.controller('indexController', ['$scope', '$location', 'authService', '$mdSidenav', function ($scope, $location, authService, $mdSidenav) {

    $scope.logOut = function () {
        authService.logOut();
        $location.path('/home');
    }

    $scope.authentication = authService.authentication;


    $scope.toggleLeft = function () {
        $mdSidenav('left')
              .toggle();
    }

    $scope.menuIcon = 'menu';
    $scope.menuToggle = function () {
        if ($scope.menuIcon == 'menu') {
            $mdSidenav('left')
              .open();
            $scope.menuIcon = 'arrow_back';
        }

        else {
            $mdSidenav('left')
              .close();
            $scope.menuIcon = 'menu';
        }
    }
   
}]);
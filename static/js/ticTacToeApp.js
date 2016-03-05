var ticTacToeApp = angular.module('ticTacToeApp', ['ngRoute', 'ngResource']);

ticTacToeApp.config(['$routeProvider', function ($routeProvider) {
       
    $routeProvider
        
    .when('/', {
        templateUrl: 'static/pages/game.html'
        })
        
}]);
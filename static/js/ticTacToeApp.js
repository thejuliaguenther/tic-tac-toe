var ticTacToeApp = angular.module('ticTacToeApp', ['ngRoute', 'ngResource']);

ticTacToeApp.config(['$routeProvider', function ($routeProvider) {
       
    $routeProvider
        
    .when('/', {
        templateUrl: 'static/pages/game.html',
        controller:'gameController'
        });
        
}]);

ticTacToeApp.value('gamePieceX', 'X');
ticTacToeApp.value('gamePieceO', 'O');

ticTacToeApp.factory('BoardService', function(){
    var factory = {};

    factory.createNewBoard = function(){
        var board = [];
        for(var i = 0; i < 9; i++){
            board.push[null];
        }
        return board;
    }

});

//Can be many instances of the same type of controller in a game 
ticTacToeApp.controller('gameController',['$scope', 'gamePieceX', 'gamePieceO', 'BoardService', function($scope, gamePieceX, gamePieceO, BoardService){

    $scope.X = gamePieceX;
    $scope.O = gamePieceO;
    // $scope.moveCount = 0;

    $scope.board = BoardService.createNewBoard();

    

    // $scope.makeMove = function(moveCount){
    //     if moveCount === 0{
    //         return;
        
    //     }
    // };


}]);
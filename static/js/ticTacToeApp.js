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

ticTacToeApp.value('boardRows', [0,1,2]);
ticTacToeApp.value('boardColumns', [0,1,2]);

ticTacToeApp.factory('BoardService', function(){
    var factory = {};

    factory.createNewBoard = function(){
        var board = [];
        for(var i = 0; i < 3; i++){
            board.push([null, null, null]);
            }
        return board;
        }
    return factory;
});

//Can be many instances of the same type of controller in a game 
ticTacToeApp.controller('gameController',['$scope','gamePieceX', 'gamePieceO', 'boardRows','boardColumns', 'BoardService', function($scope, gamePieceX, gamePieceO, boardRows, boardColumns, BoardService){

    $scope.X = gamePieceX;
    $scope.O = gamePieceO;
    $scope.moveCount = 0;
 
    $scope.board = BoardService.createNewBoard();

    $scope.boardRows = boardRows;
    $scope.boardColumns = boardColumns;

    $scope.makeMove = function(row,column){
        console.log("row"+row+" column"+column);
        // moveCount++;
        // var cellClicked = board[row][colum];
        // if(cellClicked != null){
        //     return;
        // } 
        // else{
        //     if(moveCount % 2 == 0){
        //         cellClicked = 'O';
        //     }
        //     else{
        //         cellClicked = 'X';
        //     }
        // alert("Board:"+ board);
        // }
    };


    $scope.isFull= function(){
        for (var i = 0; i < 9; i++) {
            if (!board[i]) {
                return false;
            }
        }
        return true;
    };


}]);

var app = angular.module('panelinha',['ngRoute'])

//Criação de suas controllers
app.controller('home', function($scope) {
    $scope.nome = "saladas"
});








app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/main.html",
        controller:"artigos_base"
      })
    .when("/artigos", {
        templateUrl : "./templates/saladas.html",
        controller:"saladas"
      })
    .when("/leitura/:art",{
      templateUrl : "./templates/leitura.html",
        controller:"artigo"
    })

  });
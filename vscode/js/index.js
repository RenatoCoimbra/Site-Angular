var app = angular.module("panelinha", ["ngRoute"]);

app.controller("home", function ($scope) {
  let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img");
  max = images.length;

  $scope.next = function nextImage() {
    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++;

    if (currentImageIndex >= max) currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected");
  };

  $scope.startIm = function start() {
    setInterval(() => {
      // troca de image
      console.log("A");
      $scope.next();
    }, time);
  };

  $scope.startIm();
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./templates/main.html",
      controller: "home",
    })
    .when("/saladas", {
      templateUrl: "./templates/saladas.html",
    })
    .when("/massas", {
      templateUrl: "./templates/massas.html",
    })
    .when("/sobremesas", {
      templateUrl: "./templates/sobremesas.html",
    });
});

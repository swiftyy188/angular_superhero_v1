var app = angular.module("super", []);

app.controller("hero", ["$scope", function($scope) {

  //The existing heroes in the app.
  $scope.heroes = [
    {
      "name": "Superman",
      "powers": "Too many to count"
    },
    {
      "name": "Batman",
      "powers": "Cool gadgets"
    }
  ]

  $scope.heroName = "";
  $scope.superPower = "";

  //Add the hero to the registry
  $scope.submitHero = function() {
    //Push it to the heroes array
    $scope.heroes.push({
      "name": $scope.heroName,
      "powers": $scope.superPower
    })
    //Reset the name and power to blank text
    $scope.heroName = "";
    $scope.superPower = "";
  }

}]);

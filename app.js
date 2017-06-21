(function() {
  'use strict';

  angular.module('myFirstApp',[])

  .controller("MyFirstController", function ($scope) {

    //Assigning simple variables
    $scope.name="Guilherme";
    $scope.printHello = "Hello";

    //Assigning function
    $scope.sayHello = function(){
      return "Hello World!";
    };
  });

})();

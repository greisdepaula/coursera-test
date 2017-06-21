var app = angular.module('NameCalculator',[]);
'use strict';
app.controller('NameCalculatorController', function($scope){
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function (){
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalNameValue = totalNameValue;
  };

  function calculateNumericForString(string){
    var totalStringValue = 0;
    for(var i=0; i < string.length; i++)
    {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }
});

app.controller("ContentController", function ($scope) {
  $scope.welcomeMessage="Welcome to the NameCalculator page!";
});

 var app = angular.module("myApp", []);
  app.controller("myCtrl", function ($scope) {
    $scope.nav = {
      "title": "Math 1830",
      "titleUrl": "https://psccmath.github.io/math1830/",
      "unit": [
        {
          "title": "Unit 1",
          "nav": [
            {
              "urlText": "1.1 Limits Graphically and Algebraically",
              "url": "u1s1.html"
            },
            {
              "urlText": "1.2 Infinite Limits and Asymptotes",
              "url": "u1s2.html"
            },
            {
              "urlText": "1.3 Continuity",
              "url": "u1s3.html"
            }
          ]
        },
        {
          "title": "Unit 2",
          "nav": [
            {
              "urlText": "section 2.1",
              "url": "u2s1.html"
            },
            {
              "urlText": "section 2.2",
              "url": "u2s2.html"
            },
            {
              "urlText": "section 2.3",
              "url": "u2s3.html"
            }
          ]
        }
      ]
    }
  });
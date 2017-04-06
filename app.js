/**
 * You must include the dependency on 'ngMaterial' 
 */
angular
  .module('ResumeApp', ['ngMaterial', 'ngSanitize'])
  .controller('ExperienceCtrl', function($scope) {
    $scope.jobs = [
      {
        company: "Cool Workplace",
        position: "My Cool Position",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark>"
        ]
      },
      {
        company: "Cool Workplace",
        position: "My Cool Position",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark>"
        ]
      },
      {
        company: "Cool Workplace",
        position: "My Cool Position",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark>"
        ]
      },
      {
        company: "Cool Workplace",
        position: "My Cool Position",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark>"
        ]
      }
    ];
  })
  .directive('resumeSection', function() {
    return {
      restrict: "E",
      templateUrl: "components/resume-section.html",
      scope: {
        title: "@"
      },
      transclude: true
    };
  });
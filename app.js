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
  .controller('ProjectsCtrl', function($scope) {
    $scope.projects = [
      {
        title: "todolist.social",
        description: "Website that does cool stuff",
        technologies: ["HTML", "CSS", "JavaScript", "AngularJS", "NodeJS"]
      }
    ];
  })
  .controller('SkillsCtrl', function($scope) {
    $scope.skillsets = [
      {
        title: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Java", "Python", "Ruby"]
      },
      {
        title: "Web Front-End",
        skills: ["HTML", "CSS", "JavaScript"]
      },
      {
        title: "Web Back-End",
        skills: ["NodeJS"]
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
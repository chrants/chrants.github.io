


angular
  .module('ResumeApp', ['ngMaterial', 'ngSanitize'])
  .controller('HeadSkillsCtrl', function($scope) {
    $scope.skills = ["Front End", "Back End", "Full Stack", "HTML", "CSS", "JavaScript", "Python", "Ruby", "NodeJS", "Ruby on Rails", "OracleSQL", "MongoDB", "TypeScript", "Dart", "Android SDK", "Perl", "C"];
  })
  .controller('ExperienceCtrl', function($scope) {
    $scope.jobs = [
      {
        company: "SolarWinds",
        position: "UI Intern",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>NodeJS</mark> <mark>AngularJS</mark> <mark>express.js</mark>"
        ]
      },
      {
        company: "Pearson",
        position: "My Cool Position",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>NodeJS</mark> <mark>MongoDB</mark> <mark>OracleSQL</mark> <mark>AngularJS</mark> <mark>express.js</mark>"
        ]
      },
      {
        company: "Educational Design Studios",
        position: "My Cool Position",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>Ruby</mark> <mark>Ruby on Rails</mark>"
        ]
      },
      {
        company: "Rackspace Hosting",
        position: "My Cool Position",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "I did cool stuff here. Hire me.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>Ruby</mark>"
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
      },
      {
        title: "PintOS",
        description: "A stupid OS that I wrote many parts of!",
        technologies: ["C"]
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
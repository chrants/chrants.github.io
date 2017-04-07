


angular
  .module('ResumeApp', ['ngMaterial', 'ngSanitize'])
  .controller('HeadSkillsCtrl', function($scope) {
    $scope.skills = ["Front End", "Back End", "Full Stack", "HTML", "CSS", "JavaScript", "Python", "Ruby", "NodeJS", "Ruby on Rails", "OracleSQL", "MongoDB", "TypeScript", "Dart", "CoffeeScript", "Sass", "Bootstrap", "Android SDK", "Perl", "C"];
  })
  .controller('ExperienceCtrl', function($scope) {
    $scope.jobs = [
      {
        company: "SolarWinds",
        position: "UI Intern",
        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "Implemented an internal Angular UI/UX best practices website to ensure internal code consistency among all of the products in the Solarwinds web portfolio.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>NodeJS</mark> <mark>AngularJS</mark> <mark>Express.js</mark>"
        ]
      },
      {
        company: "Pearson",
        position: "Web App Development Intern", // TODO: Change title to something else, if possible
        responsibilities: [
          "Implemented a web interface MongoDB replacement for an outdated OracleSQL internal tool, significantly reducing software-as-a-service fees while adding critical permission management features for over 1000 employees.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>NodeJS</mark> <mark>MongoDB</mark> <mark>OracleSQL</mark> <mark>AngularJS</mark> <mark>Express.js</mark> <mark>Bootstrap</mark>"
        ]
      },
      {
        company: "Educational Design Studios",
        position: "Web App Developer",
        responsibilities: [
          "Led a small team to design and implement a web application to provide teachers with an easy way exchange educational resources on various subjects.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>Ruby</mark> <mark>Ruby on Rails</mark> <mark>Bootstrap</mark>"
        ]
      },
      {
        company: "Rackspace Hosting",
        position: "Web App Development Intern",
        responsibilities: [
          "Collaborated in a team environment, creating a Ruby web-based application process to streamline the creation and requesting of internships among employees and admins.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>Ruby</mark> <mark>Bootstrap</mark>"
        ]
      }
    ];
  })
  .controller('ProjectsCtrl', function($scope) {
    $scope.projects = [
      {
        title: "todolist.social",
        description: "A todo list application hosted at todolistsocial.herokuapp.com that allows users to keep track of and share their goals with friends, utilizing peer accountability as motivation for users to complete their goals.",
        technologies: ["HTML", "CSS", "JavaScript", "AngularJS", "NodeJS", "Express.js", "Bootstrap"]
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
        skills: ["JavaScript", "Java", "Python", "Ruby", "CoffeeScript", "TypeScript", "Dart", "C", "Perl"]
      },
      {
        title: "Web Front-End",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "CoffeeScript", "Dart", "AngularJS", "Angular 2", "jQuery", "Bootstrap", "Material Design"]
      },
      {
        title: "Web Back-End",
        skills: ["Express.js", "Ruby on Rails"]
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



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
          "Implemented an internal Angular UI/UX best practices website to ensure internal code consistency among all of the products in the Solarwinds web portfolio.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>NodeJS</mark> <mark>AngularJS</mark> <mark>express.js</mark>"
        ]
      },
      {
        company: "Pearson",
        position: "Web App Development Intern", // TODO: Change title to something else, if possible
        responsibilities: [
          "Implemented a web interface MongoDB replacement for an outdated OracleSQL internal tool, significantly reducing software-as-a-service fees while adding critical permission management features for over 1000 employees.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>NodeJS</mark> <mark>MongoDB</mark> <mark>OracleSQL</mark> <mark>AngularJS</mark> <mark>express.js</mark>"
        ]
      },
      {
        company: "Educational Design Studios",
        position: "Web App Developer",
        description: "Led a small team to design and implement a Ruby on Rails web application to provide teachers with an easy way to obtain and share educational resources on various subjects.",
        responsibilities: [
          "Developed a way for teachers to rate and preview educational materials, ensuring teachers obtain the best possible educational resources for students.",
          "<mark>HTML</mark> <mark>CSS</mark> <mark>JavaScript</mark> <mark>Ruby</mark> <mark>Ruby on Rails</mark>"
        ]
      },
      {
        company: "Rackspace Hosting",
        position: "Web App Development Intern",
        responsibilities: [
          "Collaborated in a team environment, creating a Ruby web-based application process to streamline the creation and requesting of internships among employees and admins.",
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
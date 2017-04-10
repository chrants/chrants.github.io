
angular
  .module('ResumeApp', ['ngMaterial', 'ngSanitize'])
  .controller('ExperienceCtrl', function($scope) {
    $scope.jobs = [
      {
        company: "SolarWinds",
        position: "UI Intern",
//        description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
        responsibilities: [
          "Implemented an internal Angular UI/UX best practices website to ensure internal code consistency among all of the products in the Solarwinds web portfolio."
        ],
        technologies: [
          "HTML", "CSS", "JavaScript", "TypeScript", "NodeJS", "AngularJS", "Angular 2", "Sass", "ExpressJS", "Grunt", "Gulp"
        ]
      },
      {
        company: "Pearson",
        position: "Web App Development Intern", // TODO: Change title to something else, if possible
        responsibilities: [
          "Implemented a web interface MongoDB replacement for an outdated OracleSQL internal tool, significantly reducing software-as-a-service fees while adding critical permission management features for over 1000 employees."
        ],
        technologies: [
          "HTML", "CSS", "JavaScript", "NodeJS", "MongoDB", "OracleSQL", "SQLite", "AngularJS", "ExpressJS", "Bootstrap", "Perl", "Unit Testing"
        ]
      },
      {
        company: "Educational Design Studios",
        position: "Web App Developer",
        responsibilities: [
          "Led a small team to design and implement a web application to provide teachers with an easy way exchange educational resources on various subjects."
        ],
        technologies: [
          "HTML", "CSS", "JavaScript", "Ruby", "Ruby on Rails", "Bootstrap", "Unit Testing"
        ]
      },
      {
        company: "Rackspace Hosting",
        position: "Web App Development Intern",
        responsibilities: [
          "Collaborated in a team environment, creating a Ruby web-based application process to streamline the creation and requesting of internships among employees and admins."
        ],
        technologies: [
          "HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"
        ]
      }
    ];
  })
  .controller('ProjectsCtrl', function($scope) {
    $scope.projects = [
      {
        title: "todolist.social",
        description: "A todo list application hosted at <a href='https://todolistsocial.herokuapp.com/'>goo.gl/K8syhR</a> that allows users to keep track of and share their goals with friends, utilizing peer accountability as motivation for users to complete their goals.",
        technologies: ["HTML", "CSS", "JavaScript", "AngularJS", "NodeJS", "ExpressJS", "Bootstrap", "SQLite"]
      },
      {
        title: "PintOS",
        description: "A stupid OS that I wrote many parts of!",
        technologies: ["C", "Kernel Development", "File Systems", "Process Scheduling", "Concurrency"]
      }
    ];
  })
  .controller('SkillsCtrl', function($scope) {
    $scope.skillsets = [
      {
        short: "Languages",
        title: "Programming Languages",
        skills: ["JavaScript", "Java", "Python", "Ruby", "CoffeeScript", "TypeScript", "Dart", "C", "Perl", "Prolog"]
      },
      {
        short: "Front-End",
        title: "Web Front-End",
        skills: ["HTML", "CSS/SCSS", "JavaScript", "TypeScript", "CoffeeScript", "Dart", "AngularJS", "Angular 2", "jQuery", "Bootstrap", "Material Design", "Webpack", "Unit Testing"]
      },
      {
        short: "Back-End",
        title: "Web Back-End",
        skills: ["ExpressJS", "Ruby on Rails", "MongoDB", "OracleSQL", "Docker", "Build Automation", "Continuous Integration", "Concurrency", "Unit Testing"]
      },
      {
        short: "Low-Level",
        title: "Low-Level",
        skills: ["Android SDK", "C", "Kernel Development", "File Systems", "System Calls", "Concurrency"]
      }
    ];
  })
  .directive('resumeSection', function() {
    return {
      restrict: "E",
      templateUrl: "components/resume-section.html",
      scope: {
        title: "@sectionTitle"
      },
      transclude: true
    };
  })
  .directive('resumeChips', function() {
    return {
      restrict: "E",
      templateUrl: "components/resume-chips.html",
      scope: {
        source: "="
      }
    };
  });
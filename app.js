document.querySelector("#printButton").onclick = function() { window.print(); };

(function() {
  
var jobs, projects, skillsets;

jobs = [
  {
    company: "SolarWinds",
    position: "UI Intern",
    responsibilities: [
      "Implemented an internal Angular UI/UX best practices website to document UI components and ensure internal code consistency among all of the products in the Solarwinds web portfolio."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "TypeScript", "NodeJS", "AngularJS", "Angular 2", "Sass", "ExpressJS", "Grunt", "Gulp"
    ],
    startDate: "June 2016",
    endDate: "August 2016"
  },
  {
    company: "Pearson",
    position: "Full-Stack Intern",
    responsibilities: [
      "Implemented a web MongoDB data visualization tool replacement for an outdated OracleSQL internal tool, significantly reducing software-as-a-service fees while adding critical permission management features for over 1000 employees and improving the efficiency of the development-testing lifecycle."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "NodeJS", "MongoDB", "OracleSQL", "SQLite", "AngularJS", "ExpressJS", "Bootstrap", "Perl", "Unit Testing"
    ],
    startDate: "May 2015",
    endDate: "August 2015"
  },
  {
    company: "Educational Design Studios",
    position: "Full-Stack Developer",
    responsibilities: [
      "Led a small team to design and implement a web application to provide teachers with an easy way exchange educational resources on various subjects."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Ruby", "Ruby on Rails", "Bootstrap", "Unit Testing"
    ],
    startDate: "June 2013",
    endDate: "June 2014"
  },
  {
    company: "Rackspace Hosting",
    position: "Full-Stack Intern",
    responsibilities: [
      "Collaborated in a team environment, creating a Ruby web-based application process to streamline the creation and requesting of internships among employees and admins."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"
    ],
    startDate: "June 2013",
    endDate: "August 2013"
  }
];
  
projects = [
  {
    title: "todolist.social",
    description: "A todo list application hosted at <a href='https://todolistsocial.herokuapp.com/'>goo.gl/K8syhR</a> that allows users to keep track of and share their goals with friends, utilizing peer accountability as motivation for users to complete their goals.",
    technologies: ["HTML", "CSS", "JavaScript", "AngularJS", "NodeJS", "ExpressJS", "Bootstrap", "SQLite"]
  },
  {
    title: "PintOS",
    description: "A simple OS I wrote on top of, implementing virtual memory management, system calls, child processes, process scheduling, and a simple ext2 file system.",
    technologies: ["C", "Kernel Development", "File Systems", "Process Scheduling", "Concurrency"],
    hiddenPrint: true
  }
];
  
skillsets = [
  {
    short: "Languages",
    title: "Programming Languages",
    skills: ["JavaScript", "Java", "Python", "Ruby", "CoffeeScript", "TypeScript", "Dart", "C", "Perl", "Prolog"]
  },
  {
    short: "Front-End",
    title: "Web Front-End",
    skills: ["HTML", "CSS/SCSS", "JavaScript", "TypeScript", "CoffeeScript", "Dart", "AngularJS", "Angular 2", "React", "jQuery", "Bootstrap", "Material Design", "Webpack", "Unit Testing"]
  },
  {
    short: "Back-End",
    title: "Web Back-End",
    skills: ["ExpressJS", "Ruby on Rails", "MongoDB", "OracleSQL", "Docker", "Build Automation", "Continuous Integration", "Concurrency", "Unit Testing"]
  },
  {
    short: "Low-Level",
    title: "Low-Level",
    skills: ["Android SDK", "C", "Kernel Development", "File Systems", "System Calls", "Concurrency"],
    hiddenPrint: true
  }
];
  
angular
  .module('ResumeApp', ['ngMaterial', 'ngSanitize'])
  .controller('ExperienceCtrl', function($scope) {
    $scope.jobs = jobs;
  })
  .controller('ProjectsCtrl', function($scope) {
    $scope.projects = projects;
  })
  .controller('SkillsCtrl', function($scope) {
    $scope.skillsets = skillsets;
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
  
})();

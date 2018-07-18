document.querySelector("#printButton").onclick = function() { window.print(); };

(function() {
  
var jobs, projects, skillsets, references;

jobs = [
  {
    company: "Gofore",
    position: "Software Developer",
    responsibilities: [
      "Founded and led a project to automate the company's internal cloud billing processes, reducing management costs by €1000s per month and improving reliability of billing processes.",
      "Utilized natural language chat bot solutions (DialogFlow) on internal sales data to help developers and designers find and request relevant projects using technologies of their interests.",
      "Delivered expertise for a React web-based application for a non-disclosed (NDA) client, increasing the technical competency of their team.",
    ],
    technologies: [
      "Python", "Flask", "JavaScript", "TypeScript", "Node.js", "React", "Redux", "Angular 2", "Express", "Webpack", "Unit Testing", "AWS S3", "AWS EC2", "AWS Lambda"
    ],
    startDate: "February 2018",
    endDate: "Present",
    reference: {
      name: "Juho Salmi",
      position: "Product Owner",
      contact: "+358405377012",
      contactType: "tel:"
    }
  },
  {
    company: "SolarWinds",
    position: "UI Intern",
    responsibilities: [
      "Implemented an internal Angular UI/UX best practices website to document UI components and ensure internal code consistency among all of the products in the Solarwinds web portfolio."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "AngularJS", "Angular 2", "Sass", "ExpressJS", "Grunt", "Webpack", "Unit Testing"
    ],
    startDate: "June 2016",
    endDate: "August 2016",
//    reference: {
//      name: "George Reynolds",
//      position: "Manager",
//      contact: "george.reynolds@solarwinds.com",
//      contactType: "mailto:"
//    }
  },
  {
    company: "Pearson",
    position: "Full-Stack Intern",
    responsibilities: [
      "Implemented a web MongoDB data visualization tool replacement for an outdated OracleSQL internal tool, significantly reducing software-as-a-service fees while adding critical permission management features for over 1000 employees and improving the efficiency of the development-testing lifecycle."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "OracleSQL", "SQLite", "AngularJS", "ExpressJS", "Bootstrap", "Perl", "Unit Testing"
    ],
    startDate: "May 2015",
    endDate: "August 2015",
    reference: {
      name: "Ankur Kapadia",
      position: "Manager",
      contact: "anku13@gmail.com",
      contactType: "mailto:",
    }
  },
  {
    company: "Educational Design Studios",
    position: "Full-Stack Developer",
    responsibilities: [
      "Designed and implemented a website with a Ruby on Rails backend to provide teachers with an easy way to exchange educational resources on various subjects."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Ruby", "Ruby on Rails", "Bootstrap", "Unit Testing"
    ],
    startDate: "June 2013",
    endDate: "June 2014",
    reference: {
      name: "Alan Gnospelius",
      position: "CEO",
      contact: "agnospelius@satx.rr.com",
      contactType: "mailto:"
    }
  },
  {
    company: "Rackspace Hosting",
    position: "Full-Stack Intern",
    responsibilities: [
      "Collaborated in a team environment, creating a Ruby web-based application process to streamline the application process for intern candidates and their communications with intern-seeking employees."
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Ruby", "Sinatra", "Bootstrap"
    ],
    startDate: "June 2013",
    endDate: "August 2013",
//    reference: {
//      name: "John Smith",
//      position: "Senior Manager",
//      contact: "smithjaaron@gmail.com",
//      contactType: "mailto:"
//    }
  }
];
  
projects = [
  {
    title: "MoFi",
    description: "A Tinder-style application created at Junction 2017 that helps groups decide on a movie to watch based on the moods of the group. I was in charge of the Back-End.",
    technologies: ["Koa", "Mongoose", "MongoDB", "React"]
  },
  {
    title: "NinjaPup OS",
    description: "Basic Operating System written with Rust nightly. The goal is to have a fully functional OS for IOT devices, drastically simplifying IOT device setup and code.",
    technologies: ["Rust", "Kernel Development"]
  },
  {
    title: "todolist.social",
    description: "A todo list application hosted at <a href='https://todolistsocial.herokuapp.com/'>goo.gl/K8syhR</a> that allows users to keep track of and share their goals with friends, utilizing peer accountability as motivation for users to complete their goals.",
    technologies: ["HTML", "CSS", "JavaScript", "AngularJS", "Node.js", "ExpressJS", "Bootstrap", "SQLite"]
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
    skills: ["JavaScript", "Java", "Python", "Ruby", "CoffeeScript", "TypeScript", "Dart", "C", "C++", "Rust", "Perl", "Prolog"]
  },
  {
    short: "Front-End",
    title: "Web Front-End",
    skills: ["HTML", "CSS/SCSS", "JavaScript", "AngularJS", "Angular 2+", "React", "Redux", "RxJS", "TypeScript", "CoffeeScript", "Dart", "jQuery", "Unit Testing"]
  },
  {
    short: "Back-End",
    title: "Web Back-End",
    skills: ["ExpressJS", "Ruby on Rails", "MongoDB", "GraphQL", "OracleSQL", "Docker", "Build Tools", "CI Tools", "Concurrency", "Unit Testing"]
  },
  {
    short: "Low-Level",
    title: "Low-Level",
    skills: ["Android SDK", "C", "C++", "Rust", "Kernel Development", "File Systems", "System Calls", "Concurrency"],
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
  .controller('ReferencesCtrl', function($scope) {
    $scope.jobs = jobs;
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

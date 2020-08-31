document.querySelector("#printButton").onclick = () => {
  window.print();
};

(() => {
  const jobs = [
    {
      company: "Smartly.io",
      position: "Full-Stack Developer",
      responsibilities: [
        "Developed the text engine for the company's web-based video editor and renderer, which has produced millions of video ads for Fortune 500 customers.",
        "Implemented the video and image management system (Rails, TypeScript) integrated across the company's core offerings, enhancing customers' experience in creating ad campaigns (100% of company revenue).",
        "Owned the company UI component library (React, TypeScript) in close collaboration with product designers.",
        // "Interviewed engineering candidates on a survey of front-end, back-end and general technical software skills."
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "React",
        "Redux",
        "Ruby",
        "Rails",
        "PHP",
        "Python",
        "Docker"
      ],
      startDate: "September 2018",
      endDate: "November 2019"
      // reference: {
      //   name: "",
      //   position: "Engineering Team Lead",
      //   contact: "",
      //   contactType: "tel:"
      // }
    },
    {
      company: "Atlassian",
      position: "Full-Stack Developer (Contract)",
      responsibilities: [
        "Launched Retiring Old Content on Atlassian support docs (<a href='https://support.atlassian.com'>support.atlassian.com</a>).",
        "Led project efforts on TypeScript conversion and helped lead CI / CD pipeline improvements."
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "React",
        "Express",
        "GraphQL",
        "Docker",
        "Contentful CMS"
      ],
      startDate: "February 2020",
      endDate: "Present"
      // reference: {
      //   name: "",
      //   position: "Engineering Team Lead",
      //   contact: "",
      //   contactType: "tel:"
      // }
    },
    {
      company: "Gofore",
      position: "Software Developer",
      responsibilities: [
        "Founded and led a project to automate cloud billing processes, improving reliability and costs €1000s monthly.",
        "Used natural language chat bot solutions on project sales data to help consultants find relevant projects of their interests."
      ],
      technologies: [
        "Python",
        "Flask",
        "TypeScript",
        "React",
        "Redux",
        "Angular 2",
        "S3", 
        "Lambda",
        "DialogFlow"
      ],
      startDate: "February 2018",
      endDate: "September 2018",
      // reference: {
      //   name: "Juho Salmi",
      //   position: "Product Owner",
      //   contact: "+358405377012",
      //   contactType: "tel:"
      // }
    }
  ];
  const previousJobs = [
    {
      company: "SolarWinds",
      position: "UI Intern",
      responsibilities: [
        // "Implemented an internal Angular best practices website to document UI components across the Solarwinds web portfolio."
      ],
      technologies: [
        // "HTML",
        // "CSS",
        // "JavaScript",
        // "TypeScript",
        // "Node.js",
        // "AngularJS",
        // "Angular 2",
        // "Sass",
        // "ExpressJS",
        // "Grunt",
        // "Webpack"
      ],
      startDate: "June 2016",
      endDate: "August 2016"
    },
    {
      company: "Pearson Education",
      position: "Full-Stack Intern",
      responsibilities: [
        // "Developed a school testing data visualization tool for over 1000 employees with MongoDB, Express and AngularJS."
      ],
      technologies: [
        // "HTML",
        // "CSS",
        // "JavaScript",
        // "Node.js",
        // "MongoDB",
        // "SQLite",
        // "AngularJS",
        // "ExpressJS",
        // "Bootstrap",
        // "Perl"
      ],
      startDate: "May 2015",
      endDate: "August 2015",
      // reference: {
      //   name: "Ankur Kapadia",
      //   position: "Manager",
      //   contact: "anku13@gmail.com",
      //   contactType: "mailto:"
      // }
    },
    {
      company: "Educational Design Studios",
      position: "Full-Stack Intern",
      responsibilities: [
        // "Designed and implemented a website (Rails), providing teachers with an easy way to exchange educational resources."
      ],
      technologies: [
        // "HTML",
        // "CSS",
        // "JavaScript",
        // "Ruby",
        // "Ruby on Rails",
      ],
      startDate: "June 2013",
      endDate: "June 2014"
    },
    {
      company: "Rackspace Hosting",
      position: "Full-Stack Intern",
      responsibilities: [
        // "Developed a Ruby application streamlining the application process for intern candidates and intern-seeking employees."
      ],
      technologies: [
        // "HTML",
        // "CSS",
        // "JavaScript",
        // "Ruby",
        // "Sinatra",
      ],
      startDate: "June 2013",
      endDate: "August 2013"
    }
  ];

  const projects = [
    {
      title: "MoFi",
      description:
        "Hackathon project that helps groups decide on a movie to watch Tinder-style. I was in charge of the Back-End.",
      technologies: ["Koa", "Mongoose", "MongoDB", "React"]
    },
    {
      title: "NinjaPup OS",
      description:
        "Basic Operating System written with Rust nightly with paged x86 64-bit memory management.",
      technologies: ["Rust", "Kernel Development"]
    },
    {
      title: "todolist.social",
      description:
        "Todo list application that allows users to keep track of and share their goals with friends.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "AngularJS",
        "Node.js",
        "ExpressJS",
        "SQLite"
      ],
      hiddenPrint: true
    },
    {
      title: "PintOS",
      description:
        "Simple OS I wrote on top of, implementing virtual memory management, system calls, child processes, process scheduling, and a simple ext2 file system.",
      technologies: [
        "C",
        "Kernel Development",
        "File Systems",
        "Process Scheduling",
        "Concurrency"
      ],
      hiddenPrint: true
    }
  ];

  const skillsets = [
    {
      short: "Languages",
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "TypeScript",
        "Ruby",
        "Python",
        "Java",
        "C#",
        "PHP",
        "C",
        "C++",
        "Rust"
      ]
    },
    {
      short: "Front-End",
      title: "Web Front-End",
      skills: [
        "React",
        "Redux",
        "TypeScript",
        "JavaScript",
        "AngularJS",
        "Angular 2+",
        "HTML",
        "CSS / Sass",
        "RxJS (Exposure)",
        "jQuery",
      ]
    },
    {
      short: "Back-End",
      title: "Web Back-End",
      skills: [
        "ExpressJS",
        "Ruby on Rails",
        "Python Flask",
        "MongoDB",
        "PostgreSQL",
        "REST-ful APIs",
        "GraphQL",
        "Docker",
        "Concurrency"
      ]
    },
    {
      short: "Low-Level",
      title: "Low-Level",
      skills: [
        "C",
        "C++",
        "Rust",
        "Kernel Development",
        "File Systems",
        "System Calls",
        "Concurrency"
      ],
      hiddenPrint: true
    }
  ];

  angular
    .module("ResumeApp", ["ngMaterial", "ngSanitize"])
    .controller("ExperienceCtrl", function($scope) {
      $scope.jobs = jobs;
      $scope.previousJobs = previousJobs;
    })
    .controller("ProjectsCtrl", function($scope) {
      $scope.projects = projects;
    })
    .controller("SkillsCtrl", function($scope) {
      $scope.skillsets = skillsets;
    })
    .controller("ReferencesCtrl", function($scope) {
      $scope.jobs = jobs;
    })
    .directive("resumeSection", function() {
      return {
        restrict: "E",
        templateUrl: "components/resume-section.html",
        scope: {
          title: "@sectionTitle"
        },
        transclude: true
      };
    })
    .directive("resumeChips", function() {
      return {
        restrict: "E",
        templateUrl: "components/resume-chips.html",
        scope: {
          source: "="
        }
      };
    });
})();

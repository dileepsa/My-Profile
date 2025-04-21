// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cashflow,
  github,
  dotnet,
  csharp,
  reactNative,
  thoughtworks,
  portfolio,
  blogs
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  }
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: ".Net",
    icon: dotnet,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Consultant",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Worked as a consultant developer delivering scalable solutions in FinTech and IoT domains.",
      "Built responsive web interfaces using React and mobile apps using React Native for cross-platform delivery.",
      "Developed backend services and APIs using Java and Spring Boot, ensuring secure and efficient data handling.",
      "Collaborated across full-stack teams to deliver end-to-end features, from UI to backend integration.",
    ],
  },
  {
    title: "Grad consultant",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - May 2023",
    points: [
      "Contributed to a C# .NET project, actively participating in feature development and code integration.",
      "Built an automated test suite using Python to validate application behavior and ensure reliability.",
      "Improved overall test coverage by designing and implementing test cases aligned with new feature development.",
      "Integrated automated tests into the CI pipeline, enhancing early bug detection and deployment confidence.",
    ],
  },
  {
    title: "STEP Intern",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2023",
    points: [
      "Built and deployed full-stack applications using JavaScript and Node.js.",
      "Developed RESTful APIs with Express.js and integrated them with front-end clients.",
      "Exposed to various software development methodologies, including Agile and Scrum.",
      "Collaborated with devs, testers, and mentors to deliver high-quality software solutions.",
    ],
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Cashflow-holmes",
    description:
      "The board game of CASHFLOW showcases how to create valuable cash-flowing assets that put money in your pocket while eliminating the liabilities that drain your wallet.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: cashflow,
    source_code_link: "https://github.com/step-8/cashflow-holmes",
    live_site_link: "https://cashflow-holmes.onrender.com/",
  },
  {
    name: "Blogs site",
    description:
      "This is the official blogging website that i will be keep writing for the new tech stack that i have learnt as well as the places that i have been visiting.",
    tags: [
      {
        name: "Hugo",
        color: "blue-text-gradient",
      },
      {
        name: "Md",
        color: "green-text-gradient",
      },
    ],
    image: blogs,
    source_code_link: "https://github.com/dileepsa/dileepsa.github.io",
    live_site_link: "https://dileepsa.netlify.app/",
  },
  {
    name: "Portfolio",
    description:
      "Created a v1 page of mine which talks about my contributions and skills.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/dileepsa/portfolio",
    live_site_link: "https://dileepsa.github.io/portfolio/",
  }
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/dileepsa",
  },
] as const;

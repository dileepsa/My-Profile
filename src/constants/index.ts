// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
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
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
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
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "",
  },
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
  {
    title: "Content Creator",
    icon: creator,
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
    title: "React.js Developer",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#383E56",
    date: "Oct 2022 - May 2023",
    points: [
      "Developing and maintaining applications using Java spring boot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "C#.Net Developer",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - May 2023",
    points: [
      "Developing and maintaining services C#.net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern",
    company_name: "Thoughtworks",
    icon: thoughtworks,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Thanks a lot Dileep for all the great work you are doing in Lenovo - VE. You are an all-rounder in the team and is capable to complete any task irrespective of application development or Infrastructure issues. Someone who never says a \"NO\" to any sort of work. Way to go, all the best !",
    name: "ArunKumar nehru kochi santharaman",
    designation: "Lead Consultant",
    company: "Thoughtworks",
    image: user1,
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

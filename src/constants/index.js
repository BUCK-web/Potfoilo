import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    tripguide,
    threejs,
    img,
    cyberPunk
  } from "../assets";
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
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
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
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
  ];
  
  
  const projects = [
    {
      name: "IMDb Clone",
      description:
        "A movie database web application that allows users to search for movies, view details, and watch trailers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      link : "https://movie-app-9l3e.onrender.com",
      image: img,
      source_code_link: "https://github.com/BUCK-web/Movie-App",
    },
    {
      name: "Cyber Punk 2077",
      description:
        "A 3D interactive web application that showcases the futuristic world of Cyberpunk 2077, allowing users to explore and interact with the environment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        }
      ],
      link : "https://cyber-punk-3js.onrender.com",
      image: cyberPunk,
      source_code_link: "https://github.com/BUCK-web/Cyber_Punk_3JS",
    },
    {
      name: "Morrent Car Rental App",
      description:
        "A car rental web application that allows users to search for and book rental cars, view details, and manage bookings.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Zustand",
          color: "pink-text-gradient",
        }
      ],
      link : "https://morrent2.onrender.com",
      image: "./image1.png",
      source_code_link: "https://github.com/BUCK-web/Cyber_Punk_3JS",
    },
    {
      name: "Tomato Food Delivery App",
      description:
      "A food delivery web application that allows users to browse restaurants, view menus, and place orders for delivery.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      link : "https://mern-tomato.onrender.com",
      image: "./image2.png",
      source_code_link: "https://github.com/BUCK-web/N-Mern-Tomato",
    },
    {
      name: "Only Chats Realtime Chat Application",
      description:
      "A real-time chat application that allows users to create accounts, send messages, and join chat rooms.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      link : "https://realtime-chat-app-1ln8.onrender.com",
      image: "./image.png",
      source_code_link: "https://github.com/BUCK-web/Realtime-Chat-app",
    },
  ];
  
  export { services, technologies, projects };
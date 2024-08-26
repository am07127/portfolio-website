import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import superconnectorImg from "@/public/superconnector.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started College",
    location: "Karachi, PK",
    description:
      "After completing my A-levels with staggering 4 A*s, I began my journey in Computer Science at Habib University.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Web Developer",
    location: "Austin, TX",
    description:
      "I worked as a web developer for a US-based startup called Ascendia Studios. We developed marketing and IT solutions for clients. My worked revolved around the development and management of E-commerce Web Applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Undergraduate Research Assistant",
    location: "Karachi, PK",
    description:
      "I worked as an undergraduate research assistant at Habib University under Dr. Qasim Pasta. I worked on topics such as comparative analysis of graph databases. This line of work gave me hands-on experience with tools like Cypher, Graph Databases, Linux and Docker.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "IT Intern",
    location: "Karachi, PK",
    description:
      "I worked as an IT Intern at a prestigious biscuits manufacturing company in Karachi known as Continental Biscuits Limited. At their head office in Karachi I worked on the Logistics Execution Module of the SAP ERP system. Using data from that module, I developed a dashboard for the management to track the performance of the logistics department.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Test Automation Intern",
    location: "Karachi, PK",
    description:
    "I gained hands-on training in test automation using Selenium and Cypress at a renowned software house known as 10Pearls. I worked on a project that involved automating the testing of a web application for a client.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",

  }
] as const;

export const projectsData = [
  {
    title: "Super Connector Website",
    description:
      "I developed this Networking Representation Website for a US-based Startup.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: superconnectorImg,
    link: "https://www.superconnectorservice.com/",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

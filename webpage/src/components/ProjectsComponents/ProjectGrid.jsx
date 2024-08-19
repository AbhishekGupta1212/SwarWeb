import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

const projectData = [
  {
    difficulty: "Easy",
    duration: "4 hours",
    title: "Design a logo and brand identity for a new coffee shop",
    skills: ["Graphic Design", "Illustrator", "Canva", "Logo Designer"],
    completions: 620,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb76a1b8c899739b55934e9b29bd03ff675c83b8b703350461db6cbbc9269395?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
  },
  {
    difficulty: "Medium",
    duration: "4 hours",
    title: "Create a Calculator using HTML, CSS, and JavaScript",
    skills: ["HTML", "CSS", "JavaScript"],
    completions: 386,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb76a1b8c899739b55934e9b29bd03ff675c83b8b703350461db6cbbc9269395?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
  },
  {
    difficulty: "Medium",
    duration: "5 hours",
    title: "Build a To-do List App",
    skills: ["HTML", "CSS", "JavaScript", "Problem Solving"],
    completions: 215,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/14782773e86a3677b6eb8ab10395fa20199dd9f1b8e43035de6e5fc1cc830185?placeholderIfAbsent=true&apiKey=3d13fd40ad0c42f4bdd670568134c3ca"
  },
  {
    difficulty: "Easy",
    duration: "2 hours",
    title: "Getting started with design, Making a Portfolio",
    skills: ["Graphic Design", "UI/UX", "Design thinking"],
    completions: 156,
      },
  {
    difficulty: "Easy",
    duration: "3 hours",
    title: "Craft compelling cold emails for influencers for Bombay Shaving Company",
    skills: ["Social Media Management", "Influencer Marketing", "Email Marketing"],
    completions: 76,
      },
  {
    difficulty: "Easy",
    duration: "4 hours",
    title: "Write and visualize content for 3 social media posts for an edtech startup",
    skills: ["Communicative English", "Social Media Marketing", "Content Marketing"],
    completions: 61,
      },
  {
    difficulty: 'Medium',
    duration: '7 hours',
    title: 'Create a Shopping Cart using React',
    skills: ['React JS', 'Javascript', 'Software Architecture'],
    completions: '50 completions',
  
  },
  {
    difficulty: 'Easy',
    duration: '5 hours',
    title: 'Create user personas for Zerodha',
    skills: ['Business Strategy', 'Product Management', 'User Research'],
    completions: '48 completions',
  
  },
  {
    difficulty: 'Medium',
    duration: '10 hours',
    title: 'Create a Web Scraper that Scrapes Good Restaurants from Any Food Delivery Website Using Python',
    skills: ['HTML', 'Python', 'Web Scraping'],
    completions: '42 completions',
  }
];

const ProjectGrid = () => {
  return (
    <section className={styles.projectGrid}>
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectGrid;
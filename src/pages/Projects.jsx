import React from "react";
import "../styles/Projects.css"; // 스타일 파일

const projects = [
  {
    id: 1,
    title: "Project One",
    year: "2021 - 2022",
    description: "A detailed description of Project One.",
    imageUrl: "/images/project1.jpg",
    link: "/projects/project-one",
  },
  {
    id: 2,
    title: "Project Two",
    year: "2020 - 2021",
    description: "A detailed description of Project Two.",
    imageUrl: "/images/project2.jpg",
    link: "/projects/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    year: "2019 - 2020",
    description: "A detailed description of Project Three.",
    imageUrl: "/images/project3.jpg",
    link: "/projects/project-three",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>Selected Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.year}</p>
              <p>{project.description}</p>
              <a href={project.link}>Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

import { useState, useEffect } from "react";

function ProjectsTable() {
  const url = "http://localhost:5000";

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    updateProjects();
  }, []);

  function updateProjects() {
    fetch(`${url}/projects`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(error => console.log(error));
  }

  return (
    <div id="projects-table">
      { projects.map(project => (
        <li className="project-card" key={ project.id }>
          <p className="project-title">TITLE: { project.title + project.title + project.title + project.title + project.title + project.title }</p>
          <p className="project-desc"> { project.desc }</p>
          { project.complete && <p className="project-completion">✅</p> }
        </li>
      ))}
    </div>
  );
}

export default ProjectsTable;

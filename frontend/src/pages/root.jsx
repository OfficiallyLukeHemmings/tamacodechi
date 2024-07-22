import { Link } from "react-router-dom";
import ProjectsTable from "../components/projectsTable";

function Root() {
  return (
    <>
      <header>Tamacodechi</header>
      <ProjectsTable />
      <Link to="/add" id="add-project-button">Add Project</Link>
    </>
  );
}

export default Root;

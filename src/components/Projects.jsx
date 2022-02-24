import { projects } from "../statics/projectsData";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h1>Mis Proyectos</h1>
      <h4>Para ver el detalle de cada proyecto, selecciona cada imagen</h4>
      <div className="projects-container">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="project" id="proyectos">
              <img src={project.image} alt="img-project" />
              <div className="hover-project">
                <h2>{project.name}</h2>
                <br />
                <p>{project.description}</p>
                <div className="links">
                    <div className="git-container">
                    <img className="seccion-contact__box-icon" src="https://img.icons8.com/glyph-neue/64/000000/link.png" alt="link"/> 
                                     <button><a href={project.link}>Demo</a></button>
                    </div>
                  <div className="git-container">
                    <img
                      class="seccion-contact__box-icon"
                      src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                      alt="github"
                    />
                    <button><a href={project.github}>Github</a></button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

import { projects } from "../statics/projectsData";
import "./Projects.css"

function Projects(){

    return(
        <div className="projects">
            <h1>Mis Proyectos</h1>
           <div className="projects-container">
            {projects.map((project,idx) => {
                return (
                    <div  key= {idx} className="project" id="proyectos">
                        <img src={project.image} alt="img-project" />
                        <div className="hover-project">
                            <h2>{project.name}</h2>
                            <br />
                            <p>{project.description}</p>
                            <div className="links">
                                <a href={project.link}>Demo</a>
                                <a href={project.github}>Github</a>
                            </div>
                        </div>

                    </div>
                )
            })}
           </div>
        </div>
    )
}

export default Projects;
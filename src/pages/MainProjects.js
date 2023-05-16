import {projects} from "../helpers/ProjectsList";
import ProjectCard from "../components/project_card/ProjectCard";
import Article from "../components/article/Article";
import ProjectsCategories from "../components/projectsCategories/ProjectsCategories";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";

function MainProjects(){
    return(<>
        <main className='main'>
        <div className="wrapper">
            <Breadcrumbs/>
            <h1 className="projects-title">Проекты</h1>
            <ProjectsCategories/>
            <div className="projects-cards-list list">
                {projects.map((project, index)=>{
                    return <ProjectCard key={index}
                                        title={project.title}
                                        desc={project.desc}
                                        img={project.image}/>
                })}
            </div>
        </div>
        </main>
        <Article/>
        </>
    )
}

export default MainProjects;
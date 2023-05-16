
import './style.css';

function ProjectCard({title, img, desc}){
    return(<div className="project-card">
        <a href="/"></a>
        <div className="gradient"></div>
        <div className="project-card-preview"><img src={img} className="project-card-image" alt={title}/></div>
        <div className="project-card-content">
            <h2 className="project-card-title">{title}</h2>
            <p className="project-card-desc">{desc}</p>
        </div>
    </div>)
}

export default ProjectCard;
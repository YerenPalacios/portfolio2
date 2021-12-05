import Header from 'components/header/header';
import Card from 'components/card/card';
import "./pages.css"
import projects from "../projects.json"

export default function Portfolio(){
    return(
        <div>
            <Header actual="portfolio"/>
            <div className="card-container">
                {projects.map(project => (
                    <Card 
                        name={project.name}
                        img={project.image}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}
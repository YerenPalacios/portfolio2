import Header from 'components/header/header';
import Card from 'components/card/card';
import "./pages.css"

export default function Portfolio(){
    return(
        <div>
            <Header actual="portfolio"/>
            <div className="card-container">
                <Card 
                    name="Proyecto 1"
                    img="https://wp-royal.com/hyper-x/ares/wp-content/uploads/2014/10/yes_041_cubebot_5-1340x785.jpg"
                    description="Robot de madera"
                />
                <Card 
                    name="Proyecto 2"
                    img="https://media.istockphoto.com/photos/lottery-picture-id95442265?b=1&k=20&m=95442265&s=170667a&w=0&h=fKu1DRGrbfXVXWHR5c0MlE2glGse5-l8DwoUrQH4UUA="
                />
                <Card 
                    name="Proyecto 1"
                    img="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-09-20-17-21/lost-in-random-zeigt-wie-wichtig-gutes-voice-acting-in-spielen-eigentlich-ist-1632154860711.jpg/EG11/resize/1200x-1/lost-in-random-zeigt-wie-wichtig-gutes-voice-acting-in-spielen-eigentlich-ist-1632154860711.jpg"
                />
            </div>
        </div>
    )
}
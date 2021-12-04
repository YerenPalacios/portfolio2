import Header from 'components/header/header';
import Card from 'components/card/card';
import "./pages.css"

export default function Poirfolio(){
    return(
        <div>
            <Header actual="portfolio"/>
            <div className="card-container">
                <Card/>
                <Card />
                <Card/>
            </div>
        </div>
    )
}
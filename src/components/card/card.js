import './card.css'
export default function Card({name, img, description = "Sin descripción"}){

    return(
        <div className="card">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="card-text">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    )

}
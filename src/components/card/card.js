import './card.css'
export default function Card({name, img, description, link}){

    return(
        <div className="card">
            <a href={link}>
                <div className="image">
                    <img src={img? img: "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"} alt="" />
                </div>
                <div className="card-text">
                    <h1>{name}</h1>
                    <p>{description? description : "Sin descripción"}</p>
                </div>
            </a>
        </div>
    )

}
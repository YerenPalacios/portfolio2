import logo from "../../logo.svg"
import "./header.css"
import { Link } from "react-router-dom"

function Header({actual}){
    return(
        <header>
            <p className={actual=="projects"? "actual": null}><Link to="/projects">projects</Link></p>
            <p className={actual=="portfolio"? "actual": null}><Link to="/">portfolio</Link></p>
            <div className="logo">
                <img src={logo}/>
            </div>
            <p className={actual=="contact"? "actual": null}><Link to="/contact">Contact</Link></p>
            <p className={actual=="about"? "actual": null}><Link to="/about">About</Link></p>
        </header>
    )
}
export default Header
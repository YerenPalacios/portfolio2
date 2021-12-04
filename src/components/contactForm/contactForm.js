import './contactForm.css'

export default function ContactForm(){
    return(
        <div className="contact-form">
            <h1>send message</h1>
            <div className="inputs">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Subject"/>
                <textarea rows="7" placeholder="Message"></textarea>
                <button>Send Message</button>
            </div>
        </div>
    )
}
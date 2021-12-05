import Header from 'components/header/header'
import ContactForm from 'components/contactForm/contactForm'

function ContactInfo(){
    return(
        <div className="contact-form">
            <h1>Contact info</h1>
        </div>
    )
}

export default function Contact(){
    return(
        <div>
            <Header actual="contact"/>
            <div className="contact-container">
                <ContactForm/>
                <ContactInfo/>
            </div>
        </div>
    )
}
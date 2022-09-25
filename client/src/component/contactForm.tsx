import React from 'react';
import '../assets/styles/style.css';



const ContactForm:React.FC = () => {
    return (
        <>
            <h2 className='contact'>Contact our Team</h2>
            <div className="formcontainer">
                <form action="">
                    <div className="input-label">
                        <label htmlFor="Name">Name</label>
                        <input type="text" />
                    </div>
                    <div className="input-label">
                        <label htmlFor="Email">E-mail</label>
                        <input type="text" />
                    </div>
                    <div className="input-label">
                        <label htmlFor="Message">Message</label>
                        <textarea name="message"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}

export default ContactForm;
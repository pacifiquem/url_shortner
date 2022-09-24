import React from "react";
import '../assets/styles/style.css';

const BodyComponent:React.FC = () => {
    return(
    <>
        <div className="body">
            <div className="header">
                <h1>Paste the URL to be shortened</h1>
            </div>
            <div className="input">
                <input type="text" placeholder="Enter the link here" />
                <button type="submit">Shorten URL</button>
            </div>
            <div className="footer-content">
                <p>ShortURL.at is a free tool to shorten a URL or reduce a link</p>
                <p>Use our URL Shortener to create a shortened link making it easy to remember</p>
            </div>
        </div>
    </>
    );
}

export default BodyComponent;
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
        <div className="discription">
            <h2>Simple and fast URL shortener!</h2>
            <div className="paragraphs">
                <p> ShortURL allows to reduce long links from Instagram, Facebook, YouTube, Twitter, Linked In and top sites on
                    the Internet, just paste the long URL and click the Shorten URL button. On the next screen, copy the
                    shortened URL and share it on websites, chat and e-mail. After shortening the URL, check how many clicks it received.
                </p>
            </div>
        </div>
    </>
    );
}

export default BodyComponent;
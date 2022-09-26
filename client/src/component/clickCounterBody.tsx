import React from 'react';
import '../assets/styles/style.css';
import Spinner from 'react-bootstrap/Spinner';

const ClickCounterBody:React.FC = () => {
    return (
        <>
            <div className="clickCounterContainer">
                <div className='clickCounterHeader'>
                <   h1>URL Click Counter</h1>
                    <p>Enter the URL to find out how many clicks it has received so far.</p>
                </div>
                <div className='clickCounterBody'>
                    <div className="input" id='clickCounterInput'>
                        <input type="text" placeholder="Enter the link here" />
                        <button type="submit">Shorten URL</button>
                    </div>
                    <p>Example: shorturl.at/AbCdE</p>
                </div>
                <p>* Track the total hits of the shortened URL in real time, you do not have to register.</p>
            </div>
        </>
    );
}

export default ClickCounterBody;
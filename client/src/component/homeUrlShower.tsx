import React from 'react';
import '../assets/styles/style.css';


interface Props {
    url: string
}


const UrlShower:React.FC<Props> = (props) => {
    console.log(props);
    console.log(props.url);
    return (
        <>
            <div id='url-shower'>
                <div>
                    <p>{props.url}</p>
                </div>
                <button>Copy Url</button>
            </div>
        </>
    )
}

export default UrlShower;
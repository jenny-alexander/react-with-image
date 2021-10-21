import { useState } from "react";
//const [name, setName] = useState( null );
function Body() {
    const[link, setLink]=useState( 
        {
            url: 'http://google.com',
            text: 'Google'
        }
    );
    const[img, setImg]=useState(
        {
            location: 'img/canada_flag.jpg',
            altText: 'Canada flag'
        }
    );
    const[showImage, setShowImage]=useState( true );
    const toggleImage = () => {
        setShowImage( !showImage );
    }
    return (
        <div>
            <h1>Body</h1>
            <a href={ link.url }>{ link.text }</a>
            <p>Uses JSON.stringify: {JSON.stringify(link)}</p>
            {//{ ternary operator for conditional -> CHECK ? TRUE: FALSE 
                showImage ? 
                <img src={ img.location } alt={ img.altText } onClick= { toggleImage }></img>: //true
                <h2 onClick={ toggleImage }>{ img.altText }</h2> //false
            }
        </div>
    )

}

export default Body;
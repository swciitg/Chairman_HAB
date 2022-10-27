import React from "react";
import Container from "./Container.png";

const Card = (props) => {
    return(
        <div className="bg-white p-4">
            <img src={Container} alt="some img" className="w-full mb-4" />
            <h2 className="font-bold">{props.head}</h2>
            <h2 className="font-bold mb-2 text-xl">This is a heading</h2>
            <p>{props.content}</p>
            <p>Terahertz spectrosocpy
Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam netus.</p>
        </div>
    )
}

export default Card;
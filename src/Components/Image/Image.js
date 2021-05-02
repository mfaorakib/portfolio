import React from 'react';
import './Image.css'
import Img from "./Rakib.jpg";
const Image = () => {
    return (
        <div className="main-container">
        <div className="clip-each clip-solid">
             <img src={Img}></img>
        </div>
        <div>

        </div>
        <h1>Who's this guy?</h1>
        <p>I'm a Front-End Developer for ChowNow in Los Angeles, CA. <br />
  I have serious passion for UI effects, animations and creating <br /> intuitive, dynamic user experiences.
   Let's make something special.</p>
    </div>
    );
};

export default Image;
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
        <p>I'm a MERN Stack Developer  in Dhaka, Bangladesh. <br />
  I have serious passion for Development <br /> intuitive, dynamic user experiences.
   Let's make something special.</p>
   <a href="https://drive.google.com/uc?export=download&id=1vIwy0BTWIcJjSoQsxldfomeKL-CAmUBf"><button class="btn-2 icon-down"><span>Resume</span></button></a> 
    </div>
    );
};

export default Image;
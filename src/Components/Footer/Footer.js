import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (

        <div style={{paddingTop:'2%'}} className="footer-container">
          <div className="text-center p-5">
                            <a className="text-info" href={`https://www.linkedin.com/in/mfaorakib/`}> <FontAwesomeIcon icon={faLinkedinIn} size="3x" target="_blank"/></a> 
                            <a className="p-5 text-light" href={`https://github.com/mfaorakib`}><FontAwesomeIcon icon={faGithub} size="3x" target="_blank"/> </a>
                            <a href={`https://www.facebook.com/md.faisalabeoakkasrakib/`}><FontAwesomeIcon icon={faFacebook} size="3x" target="_blank" /> </a>
                        </div>
            <div className="text-center text-light">
                &copy; All right reserved {new Date().getYear()}
            </div>
        </div>
    );
};

export default Footer;

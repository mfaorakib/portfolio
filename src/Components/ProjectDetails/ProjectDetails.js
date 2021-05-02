import React from 'react';
import Modal from 'react-modal';
import works from '../FakeData/Project.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const ProjectDetails = ({modalIsOpen, closeModal,name}) => {
    const work = works.find(work => work.name == name)
    const {image, description,live} = work || {};


    if(!work){
        return <h1 className="my-5 text-center">Work not found!</h1>
    }
    return (
        <div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
        <div className="container my-5">
    <div className="row">
        <div className="col-md-6">
            <img style={{height:'300px'}} className="img-fluid" src={image} alt=""/> 
         
        </div>
        <div className="col-md-6"> 
            <h4>{name}</h4>
            <p className="border-top pt-5"><strong>Description:</strong> {description}</p>
            <a className="p-5 text-dark" href={`https://github.com/mfaorakib`}><FontAwesomeIcon icon={faGithub} size="2x" /> </a>
             
        </div>
    </div>          
</div>
<button onClick={closeModal}>go home</button>  <button> <a href={live} target="_blank"></a>git</button>
        </Modal>
    </div>
    );
};

export default ProjectDetails;

import React from 'react';
import projects from '../FakeData/Project.json'
import Project from '../Project/Project';
import './Projects.css';
const Projects = () => {
    return (
        <div className="projects p-5">
             <div className="container">
            <h1 className="text-center">Projects</h1>
            <div className="row md-4">
                {
                    projects.map(project => <Project project={project} ></Project>)
                }
            </div>
        </div>
        </div>
 
    );
};

export default Projects;
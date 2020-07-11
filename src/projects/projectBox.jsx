/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './ProjectBox.scss';

const ProjectBox = props => {
	return (
    <>
		  <div className="boxes">
          <div className="projectBox">
          <a href={props.link} target="_blank">
            <img 
              src={props.image} 
              alt={props.alt} 
            />
            </a>
          </div>
			<div className="caption">
				{props.caption}
			</div>
      </div>   
		</>
	);
};

export default ProjectBox;

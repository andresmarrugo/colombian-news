import React from 'react'
import './style.css'
function Resume(props) {
  const {autor, title, description, source, url} = props.data
  const {name} = source

  return (
    <div className="resume">
      <div className="container">
        <div className="resume-header">
          <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
          <h4>author: <span>{autor != null
              ? autor
              : "unknowed"}</span>
              source: <span>{name != null
              ? name
              : "unknowed"}</span>
          </h4>
        </div>
        <div className="resume-description">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Resume

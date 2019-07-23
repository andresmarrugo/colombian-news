import React from 'react'
import './style.css'

function Picture(props) {
    const urlImg = props.urlImg
    return (
        <div className="image">
            <img src={urlImg} alt=""/>
        </div>
    )
}

export default Picture

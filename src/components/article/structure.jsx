import React from 'react'
import Picture from './picture'
import Resume from './resume'
import './style.css'
export default function structure(props) {
    const {data} = props 
    const {urlToImage}= data
    return (
        
        <section className="article">
            <Picture urlImg={urlToImage}/><Resume data={data} />
        </section>
    )
}

import React from 'react'

import './About.css'

import Photo from '../img/me.jpeg'

const About = props =>{

    return(
        <div className="About">
            <h3>About me</h3>

            <div className="under-line">
                <div className="line-up">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>

            <img src={Photo} className="my-photo"/>

            <p>I'm front-end developer and computer sciece student</p>
        </div>
    )
}

export default About
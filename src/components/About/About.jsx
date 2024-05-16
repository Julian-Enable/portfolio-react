import React from 'react'
import './About.css'
import theme_pattern from '..//..//assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Junior Software Developer with 2 years of experience building web applications and Scripts. I have worked with technologies such as HTML, CSS, JavaScript, React, Java, and Python</p>
                        <p>My passion for development is not only reflected in my coding, also in the love and detail that I give to each of my projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Java Script</p><hr style={{ width: "30%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-archivements">
                <div className="about-archivement">
                    <h1>2+</h1>
                    <p>YEARS EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-archivement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-archivement">
                    <h1>3+</h1>
                    <p>PROGRAMMING LANGUAGES</p>
                </div>
            </div>
        </div>
    )
}

export default About
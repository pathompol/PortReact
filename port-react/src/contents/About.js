import React , { Component } from 'react'
import profilepic from '../img/profile2.jpg'


class About extends Component {
    render () {
        return (
            <div className= "condiv about">
                <h1 className= "subtopic">About Me</h1>
                <img src={profilepic} alt="profile2" className="profilepic"/>
                <h3>Hi,I'm Pathompol Ruchaudom</h3>
                
                
                
            </div>
            
            
            
            
        );
    }
}
export default About;
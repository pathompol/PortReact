import React , { Component } from 'react'
import Widecard from '../components/Widecard'

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title = "English Program" where="Pramoch wittaya ramindra School" from="2013"to="2016" gpx="GPX : 2.38"/>
                <Widecard title = "Computer Science" where="Chandrakasem Rajabhat University" from="2016"to="2020" gpx2="GPX : 2.48"/>
                
                

            </div>
        )
    }
}

export default Education;
import React, { Component} from 'react'
import Social from '../components/Social.js'
import profilepic from '../img/home.jfif'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render (){
        return (
        <div className="condiv home">
                <img src={profilepic} alt="profile" className="profilepic2"/>
                <ReactTypingEffect text={['I am Pathompol','I am a Web Developer']} speed={80}eraseDelay={200} className="typingeffect" />
                <Social/>
        </div>

        )
    }
}

export default Home;
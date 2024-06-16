import React from 'react';
import './adcard.css';
import chat1 from './../../../assets/chat.png';
import chat2 from './../../../assets/chat2.png';
import Signup from '../button/signup';

function Adcard() {
    
    return (
        <div className='main'>
            <div className='left'>
                <img src={chat1} alt="avatar" />
            </div>
            <div className='middle'>
                <h1> 👋 Hello There </h1>
                <h3> Do You Want To Chat With Your Friend?</h3>
                <div className='signup'>
                    <Signup Name="Chat Now" link="/chat" /> {/* Pass the link as a prop */}
                </div>
            </div>
            <div className='right'>
                <img src={chat2} alt="avatar" />
            </div>
        </div>
    );
}

export default Adcard;

import React from 'react';
import './About.css'
import Myimg from '../../images/Myimg/myimg1.jpg';

const About = () => {
    return (
        <div className='text-center'>
            <img src={Myimg} alt="" />
            <h4>Syed Mehedi Hasan</h4>
            <p>I want to be a web developer.I try for this.And i will ready for this, after  six month i will be a web developer.In-Sha-Allah.</p>
        </div>
    );
};

export default About;
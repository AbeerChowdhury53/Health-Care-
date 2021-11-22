import React from 'react';
import './Footer.css'
import payment from  '../image/payment.png'

const Footer = () => {
    return (
        <div className='footer-body'>
            <div className='footer-text'>
                <h6>Course Fee</h6>
                <h6>Course Time</h6>
                <h6>Our Team</h6>
                <h6>Trainer</h6>
                <h6>Our Class Room</h6>
                <h6>Address</h6>
            </div>
            <div>
               <img className='image' src={payment} alt="" />
            </div>
        </div>
    );
};

export default Footer;

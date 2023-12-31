import React from 'react'
import './header.css'
import logo from '../../../images/logo.svg'
import manreading from '../../../images/manreading.png'
import phoneCalling from '../../../images/telephone-call.png'
import mail from '../../../images/mail.png'
import location from '../../../images/location.png'
import lines from '../../../images/lines1.png'

import { FaArrowTrendUp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <div className="container">

            <img src={logo} alt="Crito logo" />
            <i className="menu-bars fa-solid fa-bars"></i>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <img src={phoneCalling} alt="" />
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <img src={mail} alt="" />
                            info@crito.com
                        </div>
                        <div className="content-box">
                            <img src={location} alt="" />
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>

                    <div className="social-media-container">
                        <a href="https://facebook.com"><FaFacebook className="social-media-icons" /></a>
                        <a href="https://x.com"><FaTwitter className="social-media-icons" /></a>
                        <a href="https://instagram.com"><FaInstagram className="social-media-icons" /></a>
                        <a href="https:linkedin.com"><FaLinkedin className="social-media-icons" /></a>
                    </div>
                </div>



                <div className="main-menu">
                    <nav>
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/news">News</a>
                        <a href="/contact">Contact</a>
                    </nav>
                    <a className="login-button" href="login.html">Login <FaArrowTrendUp /></a>
                </div>
            </div>
        </div>








            <img src={lines} className="background-lines1" alt="background lines" />




        <div className="container header-container">
            <div className="about-box">
                <div className="about-text">
                    <h1>We provide The Best business solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    
                    <div className="about-buttons">
                        <a href="#" id="about-button-consulting">Get Consulting <FaArrowTrendUp /></a>
                        <a href="#"id="about-button-learnmore">Learn More <FaArrowTrendUp /></a>
                    </div>
                </div>
                <div className="about-images">
                    <img src={manreading} alt="manreading" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
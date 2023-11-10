import React from 'react'
import './header.css'
import logo from '../../../images/logo.svg'
import manreading from '../../../images/manreading.png'
import phoneCalling from '../../../images/telephone-call.png'
import mail from '../../../images/mail.png'
import location from '../../../images/location.png'
import lines from '../../../images/lines1.png'


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
                        <a href="https://facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="https://x.com"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https:linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>



                <div className="main-menu">
                    <nav>
                        <a href="home.html">Home</a>
                        <a href="services.html">Services</a>
                        <a href="news.html">News</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                    <a className="login-button" href="login.html">Login <i className="fa-solid fa-arrow-trend-up"></i></a>
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
                        <a href="#" id="about-button-consulting">Get Consulting <i className="fa-solid fa-arrow-trend-up"></i></a>
                        <a href="#"id="about-button-learnmore">Learn More <i className="fa-solid fa-arrow-trend-up"></i></a>
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
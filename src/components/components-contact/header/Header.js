import React from 'react'

import logo from '../../../images/logo.svg'
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
    <>
    <header>
        <div class="container">

            <img id="test1" src={logo} alt="Crito logo" />
            <i class="menu-bars fa-solid fa-bars"></i>
            <div class="menu">
                <div class="top-menu">
                    <div class="contact-information">
                        <div class="content-box">
                            <img src={phoneCalling} alt="" />
                            +46 (8) 121 470 50
                        </div>
                        <div class="content-box">
                            <img src={mail} alt="" />
                            info@crito.com
                        </div>
                        <div class="content-box">
                            <img src={location} alt="" />
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>

                    <div class="social-media-container">
                    <a href="https://facebook.com"><FaFacebook className="social-media-icons" /></a>
                        <a href="https://x.com"><FaTwitter className="social-media-icons" /></a>
                        <a href="https://instagram.com"><FaInstagram className="social-media-icons" /></a>
                        <a href="https:linkedin.com"><FaLinkedin className="social-media-icons" /></a>
                    </div>
                </div>



                <div class="main-menu">
                    <nav>
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/news">News</a>
                        <a href="/contact">Contact</a>
                    </nav>
                    <a class="login-button" href="/login">Login <FaArrowTrendUp /></a>
                </div>
            </div>
        </div>

        <div class="letsconnect">
            <div class="connect-links">
                <a href="home.html">Home</a>
                <a href="contact.html">Contact</a>
            </div>
            <h1>Let's connect</h1>
        </div>
        <img src={lines} class="background-lines2" alt="background lines" />

    </header>
    </>
  )
}

export default Header
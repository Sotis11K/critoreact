import React from 'react'
import './footer.css'
import logo2 from '../images/logo2.svg'
import lines3 from '../images/lines3.png'

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-links">
                        <img src={logo2} alt="crito logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Company</h3>
                        <a href="/notfound">About</a>
                        <a href="/notfound">Features</a>
                        <a href="/notfound">Works</a>
                        <a href="/notfound">Career</a>
                    </div>
                    <div className="footer-links">
                        <h3>Help</h3>
                        <a href="/notfound">Customer Support</a>
                        <a href="/notfound">Delivery Details</a>
                        <a href="/notfound">Terms & Conditions</a>
                        <a href="/notfound">Privacy Policy</a>
                    </div>
                    <div className="footer-links">
                        <h3>Resources</h3>
                        <a href="/notfound">Free eBooks</a>
                        <a href="/notfound">Development Tutorial</a>
                        <a href="/notfound">How to - Blog</a>
                        <a href="/notfound">Youtube Playlist</a>
                    </div>
                    <div className="footer-links">
                        <h3>Link</h3>
                        <a href="/notfound">Free eBooks</a>
                        <a href="/notfound">Development Tutorial</a>
                        <a href="/notfound">How to - Blog</a>
                        <a href="/notfound">Youtube Playlist</a>
                    </div>
                </div>
            </div>
            <img className="background-lines3" src={lines3} alt="background lines" />
            <div className="copyright">
                <div className="container">
                    <span>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</span>
                    <div className="footer-socials">
                        <a href="https://facebook.com"><FaFacebook className="footer-icons" /></a>
                        <a href="https://x.com"><FaTwitter className="footer-icons" /></a>
                        <a href="https://instagram.com"><FaInstagram className="footer-icons" /></a>
                        <a href="https:linkedin.com"><FaLinkedin className="footer-icons" /></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
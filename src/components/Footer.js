import React from 'react'
import './footer.css'
import logo2 from '../images/logo2.svg'
import lines3 from '../images/lines3.png'

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
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </div>
                    <div className="footer-links">
                        <h3>Help</h3>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="footer-links">
                        <h3>Resources</h3>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                    <div className="footer-links">
                        <h3>Link</h3>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                </div>
            </div>
            <img className="background-lines3" src={lines3} alt="background lines" />
            <div className="copyright">
                <div className="container">
                    <span>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</span>
                    <div className="footer-socials">
                        <a href="https://facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="https://x.com"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https:linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
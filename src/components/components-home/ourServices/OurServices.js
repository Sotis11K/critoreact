import React from 'react'


import './ourServices.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";

const OurServices = () => {
  return (
    <>
    <section className="our-services-container">
            <div className="container">
                <span>Our Services</span>
                <h2>We Provide The Best Service For Consulting</h2>
                <div className="service-options">
                    <div>
                        <div className="servicebox-1 container">
                            <h3>Buissness Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a href="#"><FaArrowRight className="servicebox-icon" /></a>
                        </div>
                    </div>
                    <div>
                        <div className="servicebox-2 container">
                            <h3>Startup Buissness</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a href="#"><FaArrowRight className="servicebox-icon" /></a>
                        </div>
                    </div>
                    <div>
                        <div className="servicebox-3 container">
                            <h3>Financial Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a href="#"><FaArrowRight className="servicebox-icon" /></a>
                        </div>
                    </div>
                    <div>
                        <div className="servicebox-4 container">
                            <h3>Risk Management</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <a href="#"><FaArrowRight className="servicebox-icon" /></a>
                        </div>
                    </div>
                </div>
                <div className="browse-services-link">
                    <a href="#">Browse Services<FaArrowTrendUp /></a>
                </div>
            </div>
    </section>
    </>
  )
}

export default OurServices
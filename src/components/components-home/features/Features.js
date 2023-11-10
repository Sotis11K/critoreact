import React from 'react'
import './features.css'

import buisnessadvice from '../../../images/buisnessadvice.svg'
import startupbuisness from '../../../images/startupbuisness.svg'
import financialadvice from '../../../images/financialadvice.svg'
import riskmanagement from '../../../images/riskmanagement.svg'

const Features = () => {
  return (
    <>
        <section className="container features">
            <div className="features-title">
                <span>Features</span>
                <h2>Our accounting is trusted by thousand of companies</h2>
                <a className="features-button" href="#">Learn More<i className="fa-solid fa-arrow-trend-up"></i></a>
            </div>

            <div className="features-descriptions">
                <div className="features-descriptions-box">
                    <img src={buisnessadvice} alt="" />
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="features-descriptions-box">
                    <img src={startupbuisness} alt="" />
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="features-descriptions-box">
                    <img src={financialadvice} alt="" />
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="features-descriptions-box">
                    <img src={riskmanagement} alt="" />
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Features
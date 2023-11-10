import React from 'react'

import './aboutCompany.css'

import founderimg from '../../../images/founderimg.png'

const AboutCompany = () => {
  return (
    <>
    <section className="container about-company">
            <div className="about-company-image">
                <div className="founder-quote">
                    <h3>Samantha Brown, <span>Founder</span></h3>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
                <img src={founderimg} alt="" />
            </div>
            <div className="about-company-text">
                <span>About Company</span>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div>
                    <a className="about-learnmore-button" href="#">Learn More <i className="fa-solid fa-arrow-trend-up"></i></a>
                    <a className="about-introvideo-button" href="#"><i className="fa-regular fa-circle-play"></i>Intro Video</a>
                </div>
            </div>
    </section>
    </>
  )
}

export default AboutCompany
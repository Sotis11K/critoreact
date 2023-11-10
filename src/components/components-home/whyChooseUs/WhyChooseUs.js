import React from 'react'

import './whyChooseUs.css'

import processexcellence from '../../../images/processexcellence.svg'
import strategicplanning from'../../../images/strategicplanning.svg'
import experiencedesign from '../../../images/experiencedesign.svg'
import artificialintelligence from '../../../images/artificialintelligence.svg'
import whychooseusimage from '../../../images/whychooseusimage.png'

const WhyChooseUs = () => {
  return (
    <>
    
    <section className="why-choose-us">
            <div className="why-choose-us-container">
                <div className="why-choose-us-text">
                    <span>Why Choose Us</span>
                    <h2>Why We Are The Best Business Consulting Agency</h2>
                    <div className="why-choose-us-descriptions-container">
                        <div className="why-choose-us-descriptions">
                            <div className="img-container">
                                <img src={processexcellence} alt="icon" />
                            </div>
                            <div className="text-container">
                                <h3>Process Excellence</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                            </div>
                            <div className="why-choose-us-descriptions">
                                <div className="img-container">
                                <img src={strategicplanning} alt="icon" />
                            </div>
                            <div className="text-container">
                                <h3>Strategic Planning</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="why-choose-us-descriptions">
                            <div className="img-container">
                                <img src={experiencedesign} alt="icon" />
                            </div>
                            <div className="text-container">
                                <h3>Experience Design</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="why-choose-us-descriptions">
                            <div className="img-container">
                                <img src={artificialintelligence} alt="icon" />
                            </div>
                            <div className="text-container">
                                <h3>Artificial Intelligence</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-choose-us-img">
                    <img src={whychooseusimage} alt="Two women sitting" />
                    <div></div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default WhyChooseUs
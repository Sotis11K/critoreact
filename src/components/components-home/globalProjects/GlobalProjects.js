import React from 'react'
import './globalProjects.css'

import growyourbuisness from '../../../images/growyourbuisness.png'
import responsivewebsite from '../../../images/responsivewebsite.png'
import educateemployees from '../../../images/educateemployees.png'
import buisnessinsight from '../../../images/buisnessinsight.png'
import { FaArrowTrendUp } from "react-icons/fa6";




const GlobalProjects = () => {
  return (
    <>
    
    <section className="global-projects">
            <div className="container global-projects-container">
                <span id="project-text">Project & Case Studies</span>
                <h2>Let's Looks Our Global Projects</h2>
                <div className="project-container">
                    <div className="project-boxes">
                        <img src={growyourbuisness} alt="" />
                        <span>Grow your buisness</span>
                        <hr />
                        <a href="#" className="project-readmore">Read More <FaArrowTrendUp /></a>
                    </div>
                    <div className="project-boxes">
                        <img src={responsivewebsite} alt="" />
                        <span>Why your clients need a responsive website</span>
                        <hr />
                        <a href="#" className="project-readmore">Read More <FaArrowTrendUp /></a>
                    </div>
                    <div className="project-boxes">
                        <img src={educateemployees} alt="" />
                        <span>Educte your employees to get better results</span>
                        <hr />
                        <a href="#" className="project-readmore">Read More <FaArrowTrendUp /></a>
                    </div>
                    <div className="project-boxes">
                        <img src={buisnessinsight} alt="" />
                        <span>Buisness Insights is a important piece of your buisness</span>
                        <hr />
                        <a href="#" className="project-readmore">Read More <FaArrowTrendUp /></a>
                    </div>
                </div>
            </div>
        </section>
    
    
    </>
  )
}

export default GlobalProjects
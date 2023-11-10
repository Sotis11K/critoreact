import React from 'react'


import './meetTheCrew.css'

import kristinepalmer from '../../../images/kristinepalmer.png'
import markaubri from '../../../images/markaubri.png'
import kimberlyhansen from '../../../images/kimberlyhansen.png'
import justinwilloman from '../../../images/justinwilloman.png'
import cassandrawarren from '../../../images/cassandrawarren.png'
import amandatulling from '../../../images/amandatulling.png'
import jackmcdogglas from '../../../images/jackmcdogglas.png'

const MeetTheCrew = () => {
  return (
    <>
    
    
    <section className="meet-the-crew">
            <div className="meet-the-crew-container container">
                <div className="section-header-crew">
                    <span>Meet Our Team</span>
                    <div className="flex-assist">
                        <h2>Experienced Team Members</h2>
                        <a href="#">Browse Team <i className="fa-solid fa-arrow-trend-up"></i></a>
                    </div>
                </div>

                <div className="the-crew">
                    <div className="crew-members">
                        <img src={kristinepalmer} alt="" />
                        <h3>Kristine Palmer</h3>
                        <span>Chef Operation officer</span>
                    </div>
                    <div className="crew-members">
                        <img src={markaubri} alt="" />
                        <h3>Mark Aubri</h3>
                        <span>Senior Consultant</span>
                    </div>
                    <div className="crew-members">
                        <img src={kimberlyhansen} alt="" />
                        <h3>Kimberly Hansen</h3>
                        <span>Senior Consultant</span>
                    </div>
                    <div className="crew-members">
                        <img src={justinwilloman} alt="" />
                        <h3>Justin Willoman</h3>
                        <span>Senior Tech Consultant</span>
                    </div>
                </div>

                <div className="crew-page-select">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>



                <div className="testimonial">
                    <div className="testimonial-container">
                        <span>Testimonial</span>
                        <h2>What Our Client Says</h2>
                        <div className="reviews-container">
                            <div>
                                <div className="review-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div className="reviewer-information">
                                    <img src={cassandrawarren} alt="" />
                                    <div className="flex-assist">
                                        <h3>Cassandra Warren</h3>
                                        <span>Buisness Manager, Dorfus</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="review-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div className="reviewer-information">
                                    <img src={amandatulling} alt="" />
                                    <div className="flex-assist">
                                        <h3>Amanda Tulling</h3>
                                        <span>Senior Developer, Square</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="review-rating">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                                <div className="reviewer-information">
                                    <img src={jackmcdogglas} alt="" />
                                    <div className="flex-assist">
                                        <h3>Jack Mcdogglas</h3>
                                        <span>Key Account Manager, Gobona         </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="" className="all-reviews">All reviews <i className="fa-solid fa-arrow-trend-up"></i></a>
                    </div>
                </div>
                
            </div> 
        </section>
    
    </>
  )
}

export default MeetTheCrew
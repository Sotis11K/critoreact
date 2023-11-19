import React from 'react'

import './articleNews.css'

import classroomdigitalization from '../../../images/classroomdigitalization.png'
import implementchatgpt from '../../../images/implementchatgpt.png'
import moderncss from '../../../images/moderncss.png'
import { FaArrowTrendUp } from "react-icons/fa6";



const ArticleNews = () => {
  return (
    <>
    
    <section class="articleandnews">
            <div class="articleandnews-container container">
                <span>Article & News</span>
                <div class="flex-assist">
                    <h2>Get Every Single Article & News</h2>
                    <a href="">Browse Articles<FaArrowTrendUp /></a>
                </div>
                <div class="articles-container">
                    <div class="article-box">
                        <div class="article-images">
                            <img src={classroomdigitalization} alt="" />
                            <div class="article-date">
                                <h3>25</h3>
                                <span>Mar</span>
                            </div>
                        </div>
                        <span>Buisness</span>
                        <h3>How To Use Digitalization In The Classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div class="article-box">
                        <div class="article-images">
                            <img src={implementchatgpt} alt="" />
                            <div class="article-date">
                                <h3>17</h3>
                                <span>Mar</span>
                            </div>
                        </div>
                        <span>Buisness</span>
                        <h3>How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                    <div class="article-box">
                        <div class="article-images">
                            <img src={moderncss} alt="" />
                            <div class="article-date">
                                <h3>13</h3>
                                <span>Mar</span>
                            </div>
                        </div>
                        <span>Buisness</span>
                        <h3>The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
                <div class="article-pages">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </section>
    
    
    </>
  )
}

export default ArticleNews
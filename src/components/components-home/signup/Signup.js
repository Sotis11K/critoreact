import React from 'react'

import './signup.css'

import lines2 from '../../../images/lines2.svg'
import { FaArrowTrendUp } from "react-icons/fa6";


const Signup = () => {
  return (
    <>
    
    <section className="signup">
            <div className="signup-container container">
                <h2>Get News Updates By Signup</h2>
                <input placeholder="username@domain.com" type="text" />
                <a href="#">Subscribe<FaArrowTrendUp /></a>
                <img src={lines2} alt="" />
            </div>
    </section>
    
    </>
  )
}

export default Signup
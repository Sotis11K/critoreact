import React from 'react'

import './connectInformation.css'

import mappin from '../../../images/mappin.svg'
import phoneicon from '../../../images/phoneicon.svg'
import emailicon from '../../../images/emailicon.svg'





const ConnectInformation = () => {
  return (
    <>
    <section class="connect-information">
        <div class="connect-information-container container">
                    <div class="connect-information-box">
                        <img src={mappin} alt="" />
                        <div>
                            <h3>Visit us</h3>
                            <span>Sveavägen 31</span>
                            <span>111 34 STOCKHOLM</span>
                        </div>
                    </div>
                    <div class="connect-information-box">
                        <img src={phoneicon} alt="" />
                        <div>
                            <h3>Call us</h3>
                            <span>+46 (8) 121 470 50</span>
                            <span>+46 (8) 121 470 51</span>
                        </div>
                    </div>
                <div class="connect-information-box">
                    <img src={emailicon} alt="" />
                    <div>
                        <h3>Email us</h3>
                        <span>info@crito.com</span>
                        <span>support@crito.com</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ConnectInformation
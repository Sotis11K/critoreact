import React from 'react'
import './sponsors.css'

import paperz from '../../../images/paperz.svg'
import dorfus from '../../../images/dorfus.svg'
import martino from '../../../images/martino.svg'
import square from '../../../images/square.svg'
import gobana from '../../../images/gobana.svg'


const Sponsors = () => {
  return (
    <>
        <section className="container sponsors">
            <img src={paperz} alt="paperz" />
            <img src={dorfus} alt="dorfus" />
            <img src={martino} alt="martino" />
            <img src={square} alt="square" />
            <img src={gobana} alt="gobana" />
        </section>
    </>
  )
}

export default Sponsors
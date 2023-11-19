import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/components-contact/header/Header'
import ConnectInformation from '../components/components-contact/connectInformation/ConnectInformation'
import LeaveAMessage from '../components/components-contact/leaveAMessage/LeaveAMessage'
import GoogleMaps from '../components/components-contact/googleMaps/GoogleMaps'


const Contact = () => {
  return (
    <>

    <main>
      <Header />
      <ConnectInformation />
      <LeaveAMessage />
      <GoogleMaps />
    </main>
    <Footer />

    </>
  )
}

export default Contact
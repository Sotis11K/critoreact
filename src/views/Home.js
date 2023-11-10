import React from 'react'

import Header from '../components/components-home/header/Header'
import Sponsors from '../components/components-home/sponsors/Sponsors'
import Features from '../components/components-home/features/Features'
import AboutCompany from '../components/components-home/aboutCompany/AboutCompany'
import OurServices from '../components/components-home/ourServices/OurServices'
import WhyChooseUs from '../components/components-home/whyChooseUs/WhyChooseUs'
import GlobalProjects from '../components/components-home/globalProjects/GlobalProjects'
import MeetTheCrew from '../components/components-home/meet-the-crew/MeetTheCrew'
import ArticleNews from '../components/components-home/ArticleNews/ArticleNews'
import Signup from '../components/components-home/signup/Signup'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>

    <Header />
    <main>
        <Sponsors />
        <Features />
        <AboutCompany />
        <OurServices />
        <WhyChooseUs />
        <GlobalProjects />
        <MeetTheCrew />
        <ArticleNews />
        <Signup />
        <Footer />
    </main>

    </>
  )
}

export default Home
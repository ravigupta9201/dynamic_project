import React from 'react'
import HeroSection from './components/HeroSection'
import About from './about/page'
import AboutUs from './components/AboutUs'

import SliderCard from './components/SliderCard'
import WhyDymamicCard from './components/WhyDymamicCard'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import TestimonialCarousel from './components/TestimonialCarousel'

// import Projects from './components/projects/Projects'
// import Project from './components/projects/project'
// import styles from "./styles/project.module.css"


const page = () => {
  return (
    <div>
      <HeroSection 
        title={"Quality Services,Your really want !"} 
        text={"Creative Skills Pvt. Ltd. is training and employment service providing company. The company provides vocational training, entrepreneurship development services, career counseling andplacement services."} 
        imageUrl={"/pic2.jpg"} 
      />
      <AboutUs />

      <SliderCard />

      <div style={{ display: 'flex', flexDirection: 'column', margin: "30px 100px" }}>
        <div>
          <h3 style={{fontSize:"45px", color:"#054F7E", padding:"20px 0px" }} >Why DynamicSkills</h3>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap:"25px" }}>
          <WhyDymamicCard heading={"Well-Equipped Lab"}  />
          <WhyDymamicCard heading={"Highly experience instructor"} />
          <WhyDymamicCard heading={"Support after training"} />
        </div>
      </div>

      {/* <Testimonials /> */}

      
      {/* <Project className={styles.project} /> */}
        {/* <Projects /> */}
      {/* </Project> */}

      <TestimonialCarousel />

      <Footer />
      
    </div>
  )
}

export default page

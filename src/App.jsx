import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import BannerSection from './Components/BannerSection/BannerSection'
import Upload from './Components/UploadSection/FeatureSection'
import VideoSection from './Components/VideoSection/VideoSection'
import StatsSection from './Components/StatsSection/StatsSection'
import LogoSection from './Components/LogoSection/LogoSection'
import TestimonialSection from './Components/TestimonialSection/TestimonialSection'
import WhyChooseDocutech from './Components/WhyChooseDocutech/WhyChooseDocutech'
import PricingSection from './Components/PricingSection/PricingSection'
import FAQSection from './Components/FAQs/FAQSection'
import Footer from './Components/Footer/Footer'



function App() {
  return (
        <div>
          <div className="blur-circle circle-1"></div>
          <div className="blur-circle circle-2"></div>
          <Header />
          <HeroSection />
          <BannerSection />
          <div id="features"><Upload /></div>
          <VideoSection />
          <StatsSection />
          <LogoSection />
          <TestimonialSection />
          <div id="whychooseus"><WhyChooseDocutech /></div>
          <div id="pricing"><PricingSection /></div>
          <div id="faq"><FAQSection /></div>
          <Footer />
        </div>
      );
    }
    

export default App

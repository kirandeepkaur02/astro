import React from 'react'
import CosmicBackground from './CosmicBackground'
import Navbar from './Navbar'
import Hero from './Hero'
import TodayStrip from './TodayStrip'
import FeaturedAstrologers from './FeaturedAstrologers'
import ZodiacGrid from './ZodiacGrid'
import Services from './Services'
import WhyUs from './WhyUs'
import Reviews from './Reviews'
import Blog from './Blog'
import NewsLetter from './NewsLetter'
import FAQ from './FAQ'
import Footer from './Footer'

const Index = () => {
    return (
        <div className="relative min-h-dvh overflow-x-hidden">
            <CosmicBackground />
            <Navbar />
            <main>
                <Hero />
                {/* <TodayStrip /> */}
                {/* <FeaturedAstrologers />
                <ZodiacGrid />
                <Services />
                <WhyUs />
                <Reviews />
                <Blog />
                <NewsLetter />
                <FAQ /> */}
            </main> 
            {/* {/* <Footer />} */}
        </div>
    )
}
export default Index
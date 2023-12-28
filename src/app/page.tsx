import Header from '@/Components/Header'
import Navbar from '@/Components/Navbar'
import AboutUsSection from '@/Pages/AboutUsSection'
import ContactUsSection from '@/Pages/ContactUsSection'
import TestPage from '@/Pages/TestPage'
import VideoPage from '@/Pages/VideoPage'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <Header />
      <div id='home' className='scroll-smooth'>
        <VideoPage />
        
        <TestPage />
      </div>
      <div id='aboutus' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='aboutus' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='aboutus' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='aboutus' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='aboutus' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      
      <ContactUsSection />
      

    </main>
  )
}

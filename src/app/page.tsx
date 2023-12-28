import Header from '@/Components/Header'
// import Navbar from '@/Components/Navbar'
import AboutUsSection from '@/Pages/AboutUsSection'
import ContactUsSection from '@/Pages/ContactUsSection'
import TestPage from '@/Pages/TestPage'
import VideoPage from '@/Pages/VideoPage'
import Image from 'next/image'
import { Button } from '@/Components/ui/button'

export default function Home() {
  return (
    <main className='scroll-smooth'>
      <div>
        <Header />
      </div>
      <div id='home' className='scroll-smooth'>
        
        <VideoPage />
        
        <TestPage />
      </div>
      <div id='aboutus' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='projects' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='getinvolved' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='events' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <div id='blognnews' className='scroll-smooth'>
        <AboutUsSection />
      </div>
      <Button variant='secondary'>
        Hello
      </Button>
      <ContactUsSection />
      

    </main>
  )
}

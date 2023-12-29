import Header from '@/Components/Header'
// import Navbar from '@/Components/Navbar'
import AboutUsSection from '@/Pages/AboutUsSection'
import ContactUsSection from '@/Pages/ContactUsSection'
import TestPage from '@/Pages/TestPage'
import VideoPage from '@/Pages/VideoPage'
import Image from 'next/image'
import { Button } from '@/Components/ui/button'
import TestCard from '@/Components/TestCard'
import ProjectsSection from '@/Pages/ProjectsSection'
import GetInvolvedSection from '@/Pages/GetInvolvedSection'
import EventsSection from '@/Pages/EventsSection'
import BlogNNewsSection from '@/Pages/BlogNNewsSection'

export default function Home() {
    return (
        <main className="scroll-smooth">
            <div>
                <Header />
            </div>

            <div id="home" className="scroll-smooth">
                <VideoPage />
            </div>
            <div className="min-w-full bg-[#071717] min-h-2"></div>

            <div id="aboutus" className="scroll-smooth">
                <AboutUsSection />
            </div>
            <div className="min-w-full bg-black min-h-[1px]"></div>

            <div id="projects" className="scroll-smooth">
                <ProjectsSection />
            </div>
            <div className="min-w-full bg-black min-h-[1px]"></div>

            <div id="getinvolved" className="scroll-smooth">
                <GetInvolvedSection />
            </div>
            <div className="min-w-full bg-black min-h-[1px]"></div>

            <div id="events" className="scroll-smooth">
                <EventsSection />
            </div>
            <div className="min-w-full bg-black min-h-[1px]"></div>

            <div id="blognnews" className="scroll-smooth">
                <BlogNNewsSection />
            </div>
            <div className="min-w-full bg-black min-h-[1px]"></div>

            <div id="contactus" className="scroll-smooth">
                <ContactUsSection />
            </div>
            <div className="min-w-full bg-black min-h-[1px]"></div>
        </main>
    )
}

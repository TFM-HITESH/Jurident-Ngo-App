import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/Components/ui/drawer'
import { Button } from '@/Components/ui/button'

import React from 'react'
import ContactUsButton from '@/Components/ContactUsButton'
import BackgroundImageComponent from '@/Components/BackgroundImageComponent'
import Image from 'next/image'
import VideoPage from './VideoPage'
import FooterVideo from '@/Components/FooterVideo'

type ContactUsSectionProps = {}

const ContactUsSection: React.FC<ContactUsSectionProps> = () => {
    return (
        <div>
            {/* <VideoPage />
            <section id="about" className="py-16 bg-gray-100">
                <div className="flex flex-auto items-center justify-center container mx-auto">
                    <ContactUsButton />
                </div>
            </section> */}
            <FooterVideo />
        </div>
    )
}
export default ContactUsSection

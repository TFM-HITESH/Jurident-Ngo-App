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

type ContactUsSectionProps = {}

const ContactUsSection: React.FC<ContactUsSectionProps> = () => {
    return (
        <section id="about" className="py-16 bg-gray-100">
    <div className="flex flex-auto items-center justify-center container mx-auto">
      <ContactUsButton />
    </div>
  </section>
    )
}
export default ContactUsSection

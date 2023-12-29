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

type ContactUsSectionProps = {}

const ContactUsSection: React.FC<ContactUsSectionProps> = () => {
    return (
        <div>
            <Drawer>
                <DrawerTrigger><Button variant={'destructive'}>Open</Button></DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Contact Us</DrawerTitle>
                        <DrawerDescription>
                            Your Email
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Button>Submit</Button>
                        <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
export default ContactUsSection

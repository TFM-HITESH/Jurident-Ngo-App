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

const ContactUsButton: React.FC<ContactUsSectionProps> = () => {
    return (
        <div>
            <Drawer>
                <DrawerTrigger>
                    <div className="flex flex-row p-2 items-center align-center min-w-screen">
                        <button className="font-lilita text-4xl px-7 py-4 transition duration-300 ease-in-out bg:opacity-50 bg-stone-300 transform hover:bg-red-700 hover:text-black hover:shadow-lg hover:scale-110 hover:rounded-md hover:opacity-100 animate-glow-opacity">
                            Contact Us !
                        </button>
                    </div>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Contact Us !</DrawerTitle>
                        <DrawerDescription>
                            <div className="flex rounded-lg bg-white/50 bg-blur-md min-w-full min-h-full">
                                <div>Hello</div>
                            </div>
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
export default ContactUsButton

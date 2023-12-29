import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/Components/ui/sheet'
import Image from 'next/image'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type BetterProfileButtonProps = {}

const BetterProfileButton: React.FC<BetterProfileButtonProps> = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="bg-white rounded-full">
                    <Avatar>
                        <AvatarImage src="/Images/PacificoLogo.png" />
                        <AvatarFallback>PFP</AvatarFallback>
                    </Avatar>
                </div>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        <div className="font-lilita text-4xl">Pacifico</div>
                    </SheetTitle>
                    <SheetDescription>
                        <div className="flex flex-col py-3 bg-white/5 bg-blur-md font-single text-sm overflow-y-auto">
                            <Image
                                src="/Images/starfish.png"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                            <h2 className="px-4 py-4">Mission Statement :</h2>
                            <p className="px-4">
                                Pacifico: Safeguarding marine ecosystems for a
                                thriving and resilient future.
                            </p>
                            <h2 className="px-4 py-4">Past History :</h2>
                            <p className="px-4">
                                Pacifico: A proven force in combatting ocean
                                pollution, protecting biodiversity, and
                                promoting sustainability for a healthier planet.
                            </p>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
export default BetterProfileButton

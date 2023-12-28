import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/Components/ui/sheet'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type BetterProfileButtonProps = {}

const BetterProfileButton: React.FC<BetterProfileButtonProps> = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Avatar>
                    <AvatarImage src="/Images/PacificoLogo.png" />
                    <AvatarFallback>PFP</AvatarFallback>
                </Avatar>
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
export default BetterProfileButton

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
import LoginComponent from './LoginComponent'
import SignupComponent from './SignupComponent'

type BetterProfileButtonProps = {}

const BetterProfileButton: React.FC<BetterProfileButtonProps> = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Avatar>
                    <AvatarImage src="/Images/ProfilePic.jpeg/" />
                    <AvatarFallback>PFP</AvatarFallback>
                </Avatar>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                        {/* Login and Signup Components */}
                        <LoginComponent />
                        <SignupComponent />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
export default BetterProfileButton

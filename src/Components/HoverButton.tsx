import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/Components/ui/hover-card'

type HoverButtonProps = {}

const HoverButton: React.FC<HoverButtonProps> = () => {
    return (
        <div>
            <HoverCard>
                <HoverCardTrigger>
                    <button className="text-4xl px-7 py-2 mt-10 transition duration-300 ease-in-out bg:opacity-50 bg-stone-300 transform hover:bg-red-700 hover:text-black hover:shadow-lg hover:scale-110 hover:rounded-md hover:opacity-100 animate-glow-opacity">
                        Donate Now !
                    </button>
                </HoverCardTrigger>
                <div></div>
                <HoverCardContent sideOffset={20}>
                    <div className="h-full rounded-lg font-lilita text-md">
                        "Click to donate and be a hero for our oceans! Your
                        support removes tons of ocean plastic, preserving marine
                        life. Every dollar is a powerful ripple of change. Thank
                        you for making a difference!"
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}
export default HoverButton

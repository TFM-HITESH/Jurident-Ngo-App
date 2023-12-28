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
                <HoverCardContent sideOffset={20} >
                    <div className='w-full h-full rounded-lg'>
                        Hello
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}
export default HoverButton

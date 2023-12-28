'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import Container from './ui/container'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CircleDollarSign, Menu, Moon, ShoppingCart, Sun } from 'lucide-react'
import ProfileButton from './ui/ProfileButton'
import BetterProfileButton from './BetterProfileButton'

const Header = () => {
    const { theme, setTheme } = useTheme()
    const routes = [
        {
            href: '#',
            label: 'Home',
        },
        {
            href: '#aboutus',
            label: 'About Us',
        },
        {
            href: '#projects',
            label: 'Projects',
        },
        {
            href: '#getinvolved',
            label: 'Get Involved',
        },
        {
            href: '#events',
            label: 'Events',
        },
        {
            href: '#blognnews',
            label: "Blog N' News",
        },
        {
            href: '#contactus',
            label: 'Contact Us',
        },
    ]

    return (
        <header className="sm:flex sm:justify-between py-3 px-1 border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-1 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-6 md:hidden w-6" />
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[300px] sm:w-[400px]"
                            >
                                <nav className="flex flex-col gap-4">
                                    {routes.map((route, i) => (
                                        <Link
                                            key={i}
                                            href={route.href}
                                            className="block px-2 py-1 text-lg"
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>

                        <Link href="/" className="ml-4 lg:ml-0">
                            <Image
                                src="/Images/PacificoLogo.png"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                        </Link>
                        {/* <Link href="/" className="ml-4 lg:ml-0">
                            <h1 className="text-xl font-bold">Pacifico Inc.</h1>
                        </Link> */}
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-3 hidden md:block">
                        {routes.map((route, i) => (
                            <Button asChild variant="ghost">
                                <Link
                                    key={i}
                                    href={route.href}
                                    className="text-sm font-medium transition-colors"
                                >
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="mr-2"
                            aria-label="Donate Now !"
                        >
                            <div className='flex p-2'>
                                <CircleDollarSign className="h-6 w-6" />
                                <span className="sr-only">Donate Now !</span>
                            </div>
                            Donate Now !
                            
                        </Button>
                    </div>
                    <div>
                        <BetterProfileButton />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header

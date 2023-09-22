import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex-center fixed top-0 z-50 w-full border-b-2 bg-black-100 border-black-200 py-7 text-white'>
            <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-6 sm:px-16">
                <Link href="/">
                    <Image
                        src="/jsm-logo.svg"
                        width={55}
                        height={40}
                        alt="logo"
                    />
                </Link>
                <Image src="/hamburger-menu.svg" width={30} height={30} alt="bars" className='block md:hidden' />
                <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                    <li>
                        <Link href="https://jsmastery.pro/nextjs13" target='_blank' className='body-text text-gradient_blue-purple !font-bold'>Nextjs 13.4 course</Link>
                    </li>
                    <li>
                        <Link href="https://jsmastery.pro/masterclass" target='_blank' className='body-text font-normale'>Masterclass</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar

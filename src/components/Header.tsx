import Link from 'next/link'
import React from 'react'
import { medium } from '../pages/assets/index'
import Image from 'next/image'

const Header = () => {

  return (
    // Div that contains the logo and the nav bar
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
        {/* Left side */}
        <div className='flex items-center space-x-5'>
            {/* Redirect to the homepage */}
            <Link href="/">
                {/* Medium logo on the left side of the screen */}
                <Image className='w-44 object-contain cursor-pointer' src={medium} alt='medium' />
            </Link>

            {/* This div contains About, Contact and Follow section */}
            <div className='hidden xl:inline-flex items-center space-x-4'>
                <h3 className='cursor-pointer hover:text-green-600'>About</h3>
                <h3 className='cursor-pointer hover:text-green-600'>Contact</h3>
                <h3 className='text-white bg-black hover:bg-green-600 rounded-full px-4 py-1 cursor-pointer'>Follow</h3>
            </div>
        </div>

        {/* Right side */}
        <div className='flex items-center space-x-5'>
            {/* Button Sing In */}
            <h3 className='hover:text-green-600 cursor-pointer'>Sing In</h3>
            {/* Button Get Started */}
            <h3 className='hover:text-green-600 border border-black hover:border-green-600 px-5 rounded-full cursor-pointer'>Get Started</h3>
        </div>
    </header>
  )
}

export default Header

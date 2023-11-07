import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between py-5 items-center'>
        <div className='flex gap-5 items-center'>
            <h1 className='font-bold text-3xl'>Lando</h1>
            <Link href='/' className='text-md text-blue-500 hover:cursor-pointer'>Home</Link>
            <Link href='/' className='text-md hover:text-blue-500 transition-all duration-500 hover:cursor-pointer'>Pricing</Link>
            <Link href='/' className='text-md hover:text-blue-500 transition-all duration-500 hover:cursor-pointer'>About</Link>
            <Link href='/' className='text-md hover:text-blue-500 transition-all duration-500 hover:cursor-pointer'>Contact</Link>
        </div>

        <div className='flex items-center gap-5'>
            <Link href='/'>Log in</Link>
            <Link href='/' className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-500'>Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar
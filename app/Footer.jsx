import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between pt-20 pb-20 border-t-[1px] border-black'>
        <div className='flex flex-col gap-2'>
            <Link href='/' className='font-bold text-xl'>Lando</Link>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>2023 &copy; Lando <br/> All rights reserved</p>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Home</p>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Pricing</p>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>About</p>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Contact</p>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Facebook</p>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Instagram</p>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Twitter</p>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Linkedin</p>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>privacy Policy</p>
            <p className='text-md hover:cursor-pointer hover:text-blue-500 transition-all duration-500'>Terms of Service</p>
        </div>
    </div>
  )
}

export default Footer
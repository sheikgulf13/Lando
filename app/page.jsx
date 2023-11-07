import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className='flex justify-between py-20 items-center'>
        <div className='flex flex-col text-start gap-5 w-[38%]'>
          <small className='text-xs'>- FREE 30 DAY TRIAL</small>
          <h3 className='font-bold text-4xl'>The best way to showcase your project</h3>
          <p className='text-md'>Here you can put short description about your project</p>
          <div className='flex gap-5'>
            <Link href='/' className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-transparent transition-all duration-500 hover:border border-black hover:text-black'>Try for free</Link>
            <Link href='/' className='px-4 py-2 rounded-lg border border-black hover:bg-blue-500 transition-all duration-500 hover:border-none hover:text-white'>See how it works</Link>
          </div>
        </div>

        <div>
          <img src='./image.png' />
        </div>
      </section>

      <section className='flex justify-between py-20 items-center'>
        <div>
          <img src='./image-2.png' />
        </div>

        <div className='flex flex-col text-start gap-5 w-[38%]'>
          <small className='text-xs'>SMART SAVE</small>
          <h3 className='font-bold text-4xl'>All your work is safe</h3>
          <p className='text-md'>We take your data security seriously, which is why we use advanced encryption protocols to protect your files in the cloud. Your data is safe and secure with us.</p>
          <div>
            <Link href='/' className='px-4 py-2 rounded-lg border border-black hover:bg-blue-500 transition-all duration-500 hover:border-none hover:text-white'>Try now</Link>
          </div>
        </div>
      </section>

      <section className='flex justify-between py-20 items-center'>
        <div className='flex flex-col text-start gap-5 w-[38%]'>
          <small className='text-xs'>COST SAVER</small>
          <h3 className='font-bold text-4xl'>Cost saving in a smart way</h3>
          <p className='text-md'>Powerful tools that helps you reduce costs and save money on your business operations. With advanced analytics and optimization algorithms, Costsaver analyzes your existing workflows and identifies areas for improvement.</p>
          <div>
            <Link href='/' className='px-4 py-2 rounded-lg border border-black hover:bg-blue-500 transition-all duration-500 hover:border-none hover:text-white'>Try now</Link>
          </div>
        </div>

        <div>
          <img src='./image-3.png' />
        </div>
      </section>

      <section className='flex justify-between py-16 px-20 mb-32 mt-10 rounded-lg shadow-lg items-center bg-white'>
        <div className='flex flex-col text-start gap-5 w-[38%]'>
          <h3 className='font-bold text-4xl'>Get started with Lando today</h3>
          <p className='text-md'>Start optimizing your processes today.</p>
          <div>
            <Link href='/' className='px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-transparent transition-all duration-500 hover:border border-black hover:text-black'>Sign up now</Link>
          </div>
        </div>

        <div>
          <img src='./image-4.png' />
        </div>
      </section>
    </div>
  )
}

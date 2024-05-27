import React from 'react'
import { Button } from './ui/MovingBorders'
import MagicButton from './ui/MagicButton'
import { FaCopyright, FaGithub, FaHandHoldingHeart, FaHeart, FaLaptopCode, FaLinkedin, FaLocationArrow, FaMailchimp, FaMapLocation, FaVoicemail } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaHeartbeat } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
        <div className='w-full left-0 -bottom-[10rem]'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] z-5'>
                <span className='text-purple uppercase'>ready</span> to take your digital<span className='text-purple uppercase'> game </span> to the next<span className='text-purple uppercase'> level</span> ?
            </h1>
            <p className='mt-10 text-white-200 my-5 text-wrap text-center z-5 pb-3'>
                မိတ်ဆွေ၏ အနာဂတ်ရည်မှန်းချက်၊ အောင်မြင်မှုပန်းတိုင်များကို လက်လှမ်းမှီရန်အတွက် ကူညီပေးဖို့အမြဲအသင့်ဖြစ်နေပါတယ်ခင်ဗျာ
            </p>
            <a href='mailto:min@mandalaymorningstar.com' className='z-10'>
                <MagicButton
                    title="Contact Me!"
                    icon={<MdEmail />}
                    position='right'
                />
            </a>
        </div>
            <img
                src='/footer-grid.svg'
                alt='grid'
                className='w-full h-full opacity-50 z-0 translate-y-[-70%]'
            />
        </div>
        <div className='flex flex-col justify-between items-center text-sm gap-2 pb-10 lg:text-xl md:flex-row'>
            <a href='https://github.com/min-hinthar/dev-portfolio-nextjs' target='_blank' className='flex justify-center items-center gap-2 hover:text-purple'>
                <FaGithub />
                Copyright 
                <FaCopyright/>
                2024
            </a>

            <div className='flex items-center gap-1'>
                <a href='https://www.linkedin.com/in/minkkhant93/' target='_blank' className='hover:text-cyan-500 flex justify-center items-center gap-2'>
                    Min K Khant <FaLinkedin />
                </a>
                | Coded <FaLaptopCode className='hover:text-blue-600'/> with <FaHeart className='hover:text-red-700'/>
            </div>
        </div>

    </footer>
  )
}

export default Footer
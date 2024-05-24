import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from './ui/TextRevealCard'
import { socialMedia } from '@/data'

const Hero = () => {
  return (
      <div className='pb-20 pt-36'>
        {/* Aceternity Spotlight */}
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        {/* Aceternity Grid Dot */}
        <div className="absolute top-0 left-0 h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                    Dynamic Web Magic with Next.js
                </h2>

                {/* Aceternity Text Generate Effect */}
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words='Transforming Concepts into Seamless User Experiences'
                />

                <div className="flex items-center justify-center h-[10rem] rounded-2xl w-full">
                    <TextRevealCard
                        text="Gen-AI SaaS Developer"
                        revealText="My name is Min!"
                    >
                        <TextRevealCardTitle>
                            Hello, world!
                        </TextRevealCardTitle>
                        <TextRevealCardDescription>
                            Welcome to my home on the web.
                        </TextRevealCardDescription>
                    </TextRevealCard>
                </div>

                {/* Aceternity Magic Button */}
                <div className='items-center justify-center'>
                    <a href='#projects' className='items-center'>
                        <MagicButton 
                            title='View Portfolio'
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>

                <div className='flex gap-8 pt-10 items-center ml-5'>
                    {socialMedia.map(({ id, img, link }, index) => (
                        <div
                            key={id}
                            className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center'
                            style={{ transform: `translateX(-${5 * index * 2}px)`}}
                        >
                            <a href={link} target='_blank' className='hover:scale-110 hover:bg-blue-900 rounded-full'>
                                <img 
                                    src={img}
                                    alt={img}
                                    className='p-2'
                                />
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero
import { companies, testimonials } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import React from 'react'

const Clients = () => {
  return (
    <section id='testimonials' className='mt-10'>
        <h1 className='heading'>
            Testimonies by {' '}
            <span className='text-purple'>
                Trusted Clients
            </span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
                <InfiniteMovingCards 
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    pauseOnHover= {true}
                />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img 
                            src={img}
                            alt={name}
                            className='md:w-10 w-5'
                        />
                        <img 
                            src={nameImg}
                            alt={name}
                            className='md:w-24 w-20'
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Clients
import { projects } from '@/data'
import { PinContainer } from "./ui/3d-pin";
import React from 'react'
import { FaGithub, FaLocationArrow } from 'react-icons/fa6';
import { FaGlobeAmericas } from 'react-icons/fa';

const RecentProjects = () => {
  return (
    <section id='projects' className='py-20'>
        <h1 className='heading'>
            My Creative {' '}
            <span className='text-purple'>
                Portfolio Showcase
            </span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-20 mt-10'>
            {projects.map(({
                id,
                title,
                des,
                img,
                iconLists,
                link,
                github,
            }) => (
                <div 
                    key={id}
                    className='lg:min-h-[32.5rem] flex items-center justify-center w-[80vw] sm:h-[41rem] h-[32rem] sm:w-[570px]'
                >
                    <PinContainer
                        title={link}
                        href={link}
                        className='shadow-[0_5px_10px_rgba(240,_46,_170,_0.7)] p-3 rounded-xl'
                    >
                        <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden rounded-md lg:rounded-3xl bg-[#13162d]'>
                                <img 
                                    src='/bg.png'
                                    alt='bg-img'
                                    className='z-10 absolute bottom-0'
                                />
                            </div>
                                <img
                                    src={img}
                                    alt={title}
                                    className='z-10 absolute bottom-0'
                                />
                        </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                        <div className='flex items-center justify-between mt-7 mb-3 text-md sm:text-xl'>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index) => (
                                    <div
                                        key={icon}
                                        className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                        style={{ transform: `translateX(-${5 * index * 2}px)`}}
                                    >
                                        <img 
                                            src={icon}
                                            alt={icon}
                                            className='p-2'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center hover:scale-110 hover:bg-purple rounded-full p-2'>
                                <a href={github} target='_blank' className='flex text-white hover:text-black'>
                                    GitHub
                                </a>
                                <FaGithub 
                                    className='ms-3 bg-white rounded-full' 
                                    color='black'
                                />
                            </div>
                            <div className='flex justify-center items-center hover:scale-110'>
                                <a href={link} target='_blank' className='flex text-purple'>
                                    Deployed Live Demo
                                </a>
                                <FaGlobeAmericas 
                                    className='ms-3' 
                                    color='skyblue'
                                />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </section>
  )
}

export default RecentProjects
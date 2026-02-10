'use client'
import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'
import { Typewriter } from 'react-simple-typewriter'



const HeroSection = () => {
    return (
        <section id='home' className='relative pt-36 pb-24'>
            {/* part 1 */}
            <div className='mt-24 md:mt-12'>
                <ScrollReveal stagger={.12} className='flex flex-col md:flex-row gap-8 items-start md:items-center '>
                    <div className='relative flex justify-center md:justify-end'>
                        <div className='pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-br from-[#f5f5f5] via-[#6d28d9]/30 to-transparent blur-3xl opacity-90'></div>
                        <div >
                            <Image src="/images/glassAvater.png" alt='avater' width={240} height={240} className='relative' priority />
                        </div>
                    </div>
                    <div className='pl-2 text-center md:text-left'>
                        {/* content text */}
                        <p className='text-sm md:text-base text-white/60 mb-2'>
                            Hello! I Am <span className='text-[#7127BA]'>Tahia</span>
                        </p>

                        {/* MAIN heading */}
                        <h1 className='text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]'>

                            {/* typewriter part */}
                            <span className="block text-3xl sm:text-4xl md:text-5xl">
                                <Typewriter
                                    words={[
                                        'Junior Frontend Developer',
                                        'React & Next.js Developer',
                                        'Aspiring Full Stack Developer',
                                        'Enthusiastic Learner'
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={65}
                                    deleteSpeed={40}
                                    delaySpeed={1200}
                                />
                            </span>

                            {/* normal text */}
                            <span className='block mt-1'>
                                Confident is the{" "}
                                <span className='relative inline-block align-baseline'>
                                    <span className='relative z-10 text-[#7127BA]'>game</span>
                                    <span className='pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 -rotate-2 w-40 h-17'>
                                        <Image src="/images/Ellipse5.PNG" alt='' fill className='object-contain' priority />
                                    </span>
                                    ...
                                </span>
                            </span>

                        </h1>

                        <p className='mt-2 text-[10px] md:text-xs text-white/60 max-w-md md:max-w-lg mx-auto md:mx-0'>
                            Because if the person is confident, then what&apos;s the barrier?
                        </p>
                    </div>

                </ScrollReveal>
            </div>
        </section>
    )
}

export default HeroSection
'use client'
import React from 'react'
import { GrProjects } from 'react-icons/gr'
import ScrollReveal from './ScrollReveal'

const About = () => {
  return (
<section id='about' className='py-12'>
            <ScrollReveal delay={.15} className="max-w-3xl">
                <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-8'>About Me</h3>
<div className='flex flex-wrap items-center gap-3 md:gap-4'>
    <span className='px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm md:text-base hover:bg-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all duration-300 cursor-default'>
        📍 Based On Bangladesh
    </span>
    
    <span className='px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm md:text-base hover:bg-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all duration-300 cursor-default'>
        🌍 Open to remote opportunities
    </span>
    
    <span className='px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm md:text-base hover:bg-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all duration-300 cursor-default'>
        📚 Learning focused
    </span>
    
    <span className='px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm md:text-base hover:bg-[#a855f7]/20 hover:border-[#a855f7]/50 transition-all duration-300 cursor-default'>
        ✨ Detail Oriented
    </span>
</div>
                <p className='mt-5 flex items-center gap-1.5'>Currently, I &apos;m building Personal <span className='inline-flex items-center gap-2 text-[#7127BA]'><GrProjects className='size-4' aria-hidden />Projects</span></p>
                <p className='mt-10 text-white/60 leading-7'>A Full Stack Web Developer with hands-on experience building modern web applications. I focus on creating responsive, user-friendly solutions that balance technical functionality with real user needs. My skill leads me to act more confident and make customer satisfied.</p>
            </ScrollReveal>
</section>
)
}

export default About
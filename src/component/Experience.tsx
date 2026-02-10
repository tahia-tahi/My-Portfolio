import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ScrollReveal from './ScrollReveal';
type ExperienceList = {
    title: string;
    description: string;
    image: string;
}

const Experience = () => {
    const experienceList: ExperienceList[] = [
        {
            title: 'Frontend Development',
            description: 'Built multiple personal and real-world projects focusing on responsive, user-friendly UI.',
            image: '/images/Rectangle.png'
        },
        {
            title: 'REST API Integration',
            description: 'Connected frontend apps to backend services, submitted and retrieved data efficiently.',
            image: '/images/Rectangle.png'
        },
        {
            title: 'Backend Understanding & Scalability',
            description: 'Designed frontend with awareness of backend architecture, ensuring smooth integration and scalable solutions.',
            image: '/images/Rectangle.png'
        },
        {
            title: 'Version Control & Collaboration',
            description: 'Managed project versions, collaborated on team projects, and practiced code merging & branching.',
            image: '/images/Rectangle.png'
        },
    ]
    return (
        <section className='relative py-24' id='experience'>
            {/* glow effect */}
            <div className=' pointer-events-none absolute left-1/2 top-30 -translate-x-1/2 w-90vh sm:w-140 md:w-200 h-70 sm:h-95 md:h-130 opacity-100 blur-3xl'
                style={{
                    background: 'radial-gradient(60% 60%  at 50% 0%, rgba(118, 60,172,1) 50% , rgba(50,15,133,0)100%)'
                }}>

            </div>

            <div className=''>
                <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-8'>Work Experience</h3>
                {/* card */}
                <ScrollReveal stagger={.15} className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 '>
                    {
                        experienceList.map((list, index) => (
                            <article key={index} className='group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 bg-[#140a26] border border-[#2f1c55] 
                            shadow-[0_10px_50px_rgba(113,39,186,.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113,39,186,.35)] '>
                                <div className='relative flex flex-col md:flex-row sm:flex-row items-center sm:items-start gap-4 sm:gap-5 md:gap-8'>
                                    <div className='relative shrink-0 w-16 h-16 sm:size-20 md:size-24 transform duration-300 group-hover:-translate-10 group-hover:-translate-y-1'>
                                        <Image src={list.image} alt={list.title} fill className='object-contain drop-shadow-[0_8px_24px_rgba(113,39,186,.35)]' />
                                    </div>
                                    <div>
                                        <h1 className='text-base sm:text-xs md:text-xl font-semibold text-white mt-4 mb-2'>{list.title}</h1>
                                        <p className='mt-2 text-xs md:text-sm text-white/60 max-w-sm mx-auto sm:mx-0'>{list.description}</p>
                                        <div className='mt-4 flex justify-center sm:justify-start'>
                                            <Link className='inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors' href='#projects'>Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </ScrollReveal>
            </div>
        </section>
    )
}

export default Experience
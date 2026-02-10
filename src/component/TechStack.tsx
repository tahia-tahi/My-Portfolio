import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const TechStack = () => {
  return (
    <section id='skills' className='relative py-28'>
      <ScrollReveal stagger={0.08} className='text-center'>
        {/* <p className='text-white/70 mb-6'>I &apos;m currently looking to join a <span className='text-[#a855f7]'>cross-functional</span> team</p>
    <p className='text-white/50 text-sm mb-16'>that values improving people&apos;s lives through accessible design </p> */}
        <div className='relative max-w-4xl mx-auto w-full'>
          <Image src='/images/skills.png' alt='techstack' width={1200} height={720} className='w-full h-auto' priority />
        </div>
      </ScrollReveal>
    </section>
  )
}

export default TechStack
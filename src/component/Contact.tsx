import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const Contact = () => {
    return (
        <section id='contact' className='py-24 relative'>
            <ScrollReveal stagger={.08}>
                <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-8'>Contact</h3>
                <p className='text-sm text-white/60 max-w-xl '>
                    I&apos;m open to frontend development opportunities and collaborations where thoughtful design and clean code come together.
                    If you have a role or project that aligns, I’d love to connect.</p>
                <div className='mt-6'>
                    <Link href='mailto:' className='hover:text-[#a855f7]'>
                        tahiaofficial1@gmail.com
                    </Link>
                </div>
                <div className='flex items-end gap-2 mt-6'>
                    <Link href="https://www.linkedin.com/in/kazitahiaidris/" target='_blank' rel='noopener noreferrer' className='text-white/90'><FaLinkedin size={20} /></Link>
                    <Link href="https://github.com/tahia-tahi" target='_blank' rel='noopener noreferrer' className='text-white/90'><FaGithub size={20} /></Link>
                    <Link href="https://x.com/TahiaOfficial1" target='_blank' rel='noopener noreferrer' className='text-white/90'><FaTwitter size={20} /></Link>
                </div>
            </ScrollReveal>
        </section>
    )
}

export default Contact
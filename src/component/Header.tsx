'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3, HiXMark } from 'react-icons/hi2'; 

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[#0b0416]/70 backdrop-blur-md shadow-[0_0_40px_rgba(113,39,86,.20)]' : 'bg-transparent'}`}>
            <div className='max-w-7xl mx-auto px-4 lg:px-8 py-6 flex items-center justify-between'>
                {/* logo */}
                <Link href="/" className="text-white font-bold text-xl">Logo</Link>
                
                {/* desktop links */}
                <nav className='hidden md:flex space-x-10 font-medium text-lg text-white/80'>
                    <Link href="#home" className='hover:text-[#a855f7] transition duration-200'>Home</Link>
                    <Link href="#about" className='hover:text-[#a855f7] transition duration-200'>About</Link>
                    <Link href="#skills" className='hover:text-[#a855f7] transition duration-200'>Skills</Link>
                    <Link href="#experience" className='hover:text-[#a855f7] transition duration-200'>Experience</Link>
                    <Link href="#projects" className='hover:text-[#a855f7] transition duration-200'>Projects</Link>
                    <Link href="#contact" className='hover:text-[#a855f7] transition duration-200'>Contact</Link>
                </nav>

                {/* mobile button */}
                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden p-2 rounded text-white/80 transition duration-200'>
                    {isOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
                </button>
            </div>

            {/* mobile menu */}
            {isOpen && (
                <div className='md:hidden px-6 pb-8 bg-[#0b0416]/90 backdrop-blur-lg'>
                    <div className='flex flex-col space-y-6 font-medium text-base text-white/80'>
                        <Link onClick={() => setIsOpen(false)} href="#home" className='hover:text-[#a855f7] py-2'>Home</Link>
                        <Link onClick={() => setIsOpen(false)} href="#about" className='hover:text-[#a855f7] py-2'>About</Link>
                        <Link onClick={() => setIsOpen(false)} href="#skills" className='hover:text-[#a855f7] py-2'>Skills</Link>
                        <Link onClick={() => setIsOpen(false)} href="#experience" className='hover:text-[#a855f7] py-2'>Experience</Link>
                        <Link onClick={() => setIsOpen(false)} href="#contact" className='hover:text-[#a855f7] py-2'>Contact</Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;
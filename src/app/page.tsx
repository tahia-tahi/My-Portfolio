import About from '@/component/About'
import Contact from '@/component/Contact'
import Experience from '@/component/Experience'
import HeroSection from '@/component/HeroSection'
import Projects from '@/component/Projects'
import TechStack from '@/component/TechStack'
import React from 'react'

const Home = () => {
  return (
    <div >
      <main className='max-w-7xl mx-auto px-6 lg:px-8'>
        <HeroSection />
        <About/>
         <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>

    </div>
  )
}

export default Home
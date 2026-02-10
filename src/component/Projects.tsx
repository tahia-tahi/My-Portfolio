import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const Projects = () => {
    return (
        <section id='projects' className='relative py-24 space-y-24'>
            <div >
                <div className='pointer-events-none absolute right-0 left-1/3 top-8 z-10 h-105 opacity-40 blur-3xl'
                    style={{
                        background: 'radial-gradient(60% 60% at 60% 40%, rgba(125,58,242,.65)0%, rgba(18,8,36,0) 70% )'
                    }} />
            </div>

            <ScrollReveal stagger={.15} className='grid grid-cols-1 md:grid-cols-2'>
                <div className='relative -pl-50 z-10 '>
                    <div>
                        <p className='text-xs text-[#a48cc9]'>
                            Featured Project
                        </p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white opacity-90 mb-12'>Lawn Shaper</h3>
                    </div>
                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,.25)] '>
                        <p className='text-sm p-5 text-white/75'>A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.</p>
                        <div className='pointer-events-none absolute -inset-px rounded-[14px] opacity-60'
                            style={{
                                background: 'linear-gradient(135deg,rgba(168,85,247,.35), rgba(165,85,247,.05))'
                            }} />

                    </div>
                    <div className='mt-5 ml-2 flex justify-start space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-90'>
                            <Image src='/images/Lawn-Shaper.png' alt='portfolio' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:translate-[55%]' />
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <div >
                <div className='pointer-events-none absolute right-0 left-1/3 top-8 z-10 h-105 opacity-40 blur-3xl'
                    style={{
                        background: 'radial-gradient(60% 60% at 60% 40%, rgba(125,58,242,.65)0%, rgba(18,8,36,0) 70% )'
                    }} />
            </div>

            <ScrollReveal stagger={.15} delay={.4} className='grid grid-cols-1 md:grid-cols-2 '>
                <div className='relative md:order-2 -pl-50 z-10 '>
                    <div className='mb-12 text-right'>
                        <p className='text-xs text-[#a48cc9]'>
                            Featured Project
                        </p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white opacity-90 mb-12'>Bongo Tour Planner</h3>
                    </div>
                    <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,.25)] '>
                        <p className='text-sm p-5 text-white/75'>A web app for visualizing personalized Spotify data. View your
                            top artists, top tracks, recently played tracks, and detailed audio
                            information about each track. Create and save new playlists of
                            recommended tracks based on your existing playlists and more.</p>
                        <div className='pointer-events-none absolute -inset-px rounded-[14px] opacity-60'
                            style={{
                                background: 'linear-gradient(135deg,rgba(168,85,247,.35), rgba(165,85,247,.05))'
                            }} />

                    </div>
                    <div className='mt-5 ml-2 flex justify-end space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-90'>
                            <Image src='/images/Bongo-Tour-Planner.png' alt='portfolio' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:translate-[55%]' />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}

export default Projects
import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'
import Link from 'next/link'

const Projects = () => {
    return (
        <section id='projects' className='relative py-24 space-y-24'>
            {/* project 1 */}
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
                        <p className='text-sm p-5 text-white/75'> Lawn Shaper is a web-based application built for gardening lovers who want to connect through real-life lawn care experiences. Built with React, Firebase, and Tailwind CSS. Core Features :
                            CRUD Functionality,
                            View detailed profiles,
                            Gardeners can share plant care tips,
                            Tips are categorized by topic</p>
                        <div className='pointer-events-none absolute -inset-px rounded-[14px] opacity-60'
                            style={{
                                background: 'linear-gradient(135deg,rgba(168,85,247,.35), rgba(165,85,247,.05))'
                            }} />

                    </div>
                    <div className='mt-5 ml-2 flex justify-start space-x-3 text-white/60'>
                        <Link className='inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors' href='https://lawn-shaper.web.app/' target='_blank'>See Project</Link>                
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
            {/* project 2 */}
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
                        <p className='text-sm p-5 text-white/75'>A tourism management website where you find  tourist, admin, tour guide these three types of roles. Along with dashboard and CRUD function users can apply for being a guide.
                            Core Features :
                            CRUD Functionality,
                            3 types of user with dashboard,
                            Application for being a tour guide,
                            Membership system,
                            Stripe payment system,
                            Admin : milestone@school.com,
                            Password : milestoneSchool$</p>
                        <div className='pointer-events-none absolute -inset-px rounded-[14px] opacity-60'
                            style={{
                                background: 'linear-gradient(135deg,rgba(168,85,247,.35), rgba(165,85,247,.05))'
                            }} />

                    </div>
                    <div className='mt-5 ml-2 flex justify-end space-x-3 text-white/60'>
                        <Link className='inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors' href='https://bongo-tour-planner.web.app/' target='_blank'>See Project</Link>                
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
            {/* project 3 */}
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
                        <h3 className='text-2xl md:text-3xl font-semibold text-white opacity-90 mb-12'>Collab Learn</h3>
                    </div>
                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,.25)] '>
                        <p className='text-sm p-5 text-white/75'>A modern, collaborative platform where students and educators can create, submit, and evaluate assignments. Built with React, Firebase, JWT, and Tailwind CSS. Core Features :
                            CRUD Functionality for authorized users,
                            Marking System,
                            Role-Based Access,
                            JWT Authentication</p>
                        <div className='pointer-events-none absolute -inset-px rounded-[14px] opacity-60'
                            style={{
                                background: 'linear-gradient(135deg,rgba(168,85,247,.35), rgba(165,85,247,.05))'
                            }} />

                    </div>
                    <div className='mt-5 ml-2 flex justify-start space-x-3 text-white/60'>
                        <Link className='inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors' href='https://collab-learn-b1813.web.app/' target='_blank'>See Project</Link>                
                    </div>
                </div>
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-90'>
                            <Image src='/images/Collab-Learn.png' alt='portfolio' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:translate-[55%]' />
                        </div>
                    </div>
                </div>
            </ScrollReveal>


            {/* project 4 */}

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
                        <h3 className='text-2xl md:text-3xl font-semibold text-white opacity-90 mb-12'>Law BD</h3>
                    </div>
                    <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,.25)] '>
                        <p className='text-sm p-5 text-white/75'>A platform for consulting lawyers with booking system and appointment.Features:appointment booking,cancelling,details of lawyers.</p>
                        <div className='pointer-events-none absolute -inset-px rounded-[14px] opacity-60'
                            style={{
                                background: 'linear-gradient(135deg,rgba(168,85,247,.35), rgba(165,85,247,.05))'
                            }} />

                    </div>
                    <div className='mt-5 ml-2 flex justify-end space-x-3 text-white/60'>
                        <Link className='inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors' href='https://ass8-lawbd-b11.netlify.app/' target='_blank'>See Project</Link>   
                    </div>
                </div>
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168,85,247,.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-90'>
                            <Image src='/images/Law-BD.png' alt='portfolio' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[55%] group-active:-translate-y-[55%] group-focus:translate-[55%]' />
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}

export default Projects
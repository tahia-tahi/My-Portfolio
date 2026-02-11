'use client'
import React from 'react'
import {
  RiReactjsLine, RiNextjsLine, RiJavascriptLine,
  RiTailwindCssLine, RiNodejsLine
} from 'react-icons/ri'
import { SiMongodb, SiRedux, SiFigma } from 'react-icons/si'

const SkillSection = () => {
  const skills = [
    { icon: RiReactjsLine, color: 'text-cyan-400' },
    { icon: RiNextjsLine, color: 'text-white' },
    { icon: RiJavascriptLine, color: 'text-yellow-400' },
    { icon: RiTailwindCssLine, color: 'text-sky-400' },
    { icon: RiNodejsLine, color: 'text-green-500' },
    { icon: SiMongodb, color: 'text-green-400' },
    { icon: SiRedux, color: 'text-purple-400' },
    { icon: SiFigma, color: 'text-pink-400' },
  ]

  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-12">
        My Tech Stack
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max marquee hover:[animation-play-state:paused]">
          {[...skills, ...skills].map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="mx-10 flex items-center justify-center"
              >
                <Icon
                  className={`text-6xl md:text-7xl ${s.color}
                  drop-shadow-[0_0_20px_rgba(113,39,186,.45)]`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillSection

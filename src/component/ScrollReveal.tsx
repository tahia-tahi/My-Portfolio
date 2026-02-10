'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  offsetY?: number
  opacityFrom?: number
  duration?: number
  delay?: number
  ease?: string
  stagger?: number
  as?: keyof React.JSX.IntrinsicElements
}

const ScrollReveal = ({
  children,
  className,
  offsetY = 24,
  opacityFrom = 0,
  duration = 0.8,
  delay = 0,
  ease = 'power3.out',
  stagger,
  as: Wrapper = 'div',
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    gsap.registerPlugin(ScrollTrigger)
    const element = containerRef.current

    const targets =
      typeof stagger === 'number'
        ? element.querySelectorAll(':scope > *')
        : element

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: opacityFrom,
          y: offsetY,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          stagger,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        }
      )
    }, element)

    return () => ctx.revert()
  }, [offsetY, opacityFrom, duration, delay, ease, stagger])

  const Tag = Wrapper as any

  return (
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  )
}

export default ScrollReveal

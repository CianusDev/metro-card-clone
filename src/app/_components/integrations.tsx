"use client"
import { useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { motion } from 'motion/react';
import { Button } from "@/components/ui/button";

export  function Integrations() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Transform scroll progress into rotation degrees
  // First ring rotates slower (1 rotation)
  const firstRingRotation = useTransform(scrollYProgress, [0, 1], [0, 360])
  // Second ring rotates faster in opposite direction (1.5 rotations)
  const secondRingRotation = useTransform(scrollYProgress, [0, 1], [0, -540])

  const thirdRingRotation = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section className="grid grid-cols-1 p-4 md:grid-cols-2 gap-8 mt-24 w-full">
        <div className=" flex flex-col gap-8 justify-center">
            <h1 className="text-5xl font-semibold">Explore our integrations and build your business&apos; financial hub.</h1>
            <div>
                <Button size={"lg"} className='rounded-xl'>Learn More</Button>
            </div>
        </div>
        <div ref={containerRef} className="relative bg-secondary m-auto p-8 rounded-3xl">
        <div className="relative md:w-[400px] md:h-[400px] size-64 ">
          {/* Center logo */}
          <div   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black rounded-3xl flex items-center justify-center">
            <motion.span style={{ rotate: thirdRingRotation }} className="text-white text-2xl font-bold">M</motion.span>
          </div>

          {/* First ring (outer) */}
          <motion.div className="absolute inset-0 rounded-full border-2 border-dashed" style={{ rotate: firstRingRotation }}>
            {/* Outer ring logos */}
            <img src="/assets/i6.webp" className="absolute left-1/2 -translate-x-1/2 -top-6 md:size-16 size-10 rounded-full" />
            <img src="/assets/i7.webp" className="absolute -right-6 top-1/2 -translate-y-1/2 md:size-16 size-10 rounded-full" />
            <img src="/assets/i8.webp" className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:size-16 size-10 rounded-full" />
            <img src="/assets/i9.webp" className="absolute -left-6 top-1/2 -translate-y-1/2 md:size-16 size-10 rounded-full" />
          </motion.div>

          {/* Second ring (inner) */}
          <motion.div className="absolute md:inset-[80px] inset-14 rounded-full border-2 border-dashed" style={{ rotate: secondRingRotation }}>
            {/* Inner ring logos */}
            <img src="/assets/i1.webp" alt="all" className="absolute left-1/2 -translate-x-1/2 -top-4 md:size-12 size-8  rounded-full" />
            <img src="/assets/i2.webp" className="absolute -right-4 top-1/2 -translate-y-1/2 md:size-12 size-8  rounded-full" />
            <img src="/assets/i3.webp" className="absolute left-1/2 -translate-x-1/2 -bottom-4 md:size-12 size-8  rounded-full" />
            <img src="/assets/i4.webp" className="absolute -left-4 top-1/2 -translate-y-1/2 md:size-12 size-8 rounded-full" />
          </motion.div>
        </div>
    </div>
    </section>
  )
}


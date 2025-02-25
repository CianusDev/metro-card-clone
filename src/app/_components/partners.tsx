"use client"
import Image from 'next/image'
import React from 'react'

export function Partners() {
    const partners = [
        {
            name: "Google",
            logo: "/assets/p1.webp",
        },
        {
            name: "Apple",
            logo: "/assets/p2.webp",
        },
        {
            name: "Microsoft",
            logo: "/assets/p3.webp",
        },
        {
            name: "Amazon",
            logo: "/assets/p4.webp",
        },
        {
            name: "Facebook",
            logo: "/assets/p5.webp",
        },
        {
            name: "Uber",
            logo: "/assets/p7.webp",
        }
    ]
  return (
    <section className='w-full flex mt-24 flex-col h-52 items-center justify-center gap-8'>
        <h1 className='font-bold text-xl'>Trusted by the 200+ ambitious teams</h1>
        <div className='flex items-center justify-around gap-4 flex-wrap w-full'>
            {partners.map((item) => (
                <Image key={item.name} src={item.logo} className='flex-shrink-0' alt={item.name} width={100} height={100}/>
            ))}
        </div>
    </section>
  )
}

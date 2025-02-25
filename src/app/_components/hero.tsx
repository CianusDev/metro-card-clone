"use client"
import Image from 'next/image'
import React from 'react'
import { CheckIcon } from "lucide-react"
import { Button } from '@/components/ui/button'

export function Hero() {
    const avantages = [
        "Middlesex Federal Savings",
        "Robust security measures",
        "Swift card management options",
        "Deposits are protected up to $250,000"
    ]
  return (
    <section className='grid grid-cols-1 px-4 md:grid-cols-2 gap-8 w-full'>
        <div className='flex flex-col justify-end gap-8 flex-shrink-0 space-y-4 w-full'>
            <h1 className='font-bold text-7xl'>US Bank Accounts For Remote Workers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                {avantages.map((item, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <div className='bg-primary flex-shrink-0 text-background rounded-full size-6 flex justify-center items-center'>
                            <CheckIcon className='w-4 h-4'/>
                        </div>
                        {item}
                    </div>
                ))}
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                <Button size={"lg"} className='flex h-16 items-center gap-2'>
                    <Image src={"/assets/app-store.webp"} alt="google play" width={40} height={40}/>
                    <div className='flex flex-col'>
                        <span>Download on the</span>
                        <h1 className='text-2xl font-bold'>App Store</h1>
                    </div>
                </Button>
                <Button className='flex items-center h-16 gap-2'>
                    <Image src={"/assets/play-store.webp"} alt="google play" width={40} height={40}/>
                    <div className='flex flex-col gap-1'>
                        <span>GET IT ON</span>
                        <h1 className='text-2xl font-bold'>Google Play</h1>
                    </div>
                </Button>
            </div>
        </div>
        <div className='relative'>
            <Image src={"/assets/hero.webp"} alt="hero" className='rounded-3xl ' width={700} height={400}/>
            <Image src={"/assets/activity-hero.webp"} alt="hero" className='rounded-3xl absolute bottom-6 max-sm:w-40 left-6' width={300} height={200}/>
            <Image src={"/assets/rating-hero.webp"} alt="hero" className='rounded-3xl absolute max-sm:w-24  bottom-6 right-6' width={130} height={200}/>
        </div>
    </section>
  )
}

"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function BentoGrid() {
    const bento = [
        {
            title: "Receive USD in minutes",
            description:"Seamlessly receive USD within minutes, ensuring swift and hassle-free transactions",
            image: "/assets/bento1.webp",
        },
        {
            title: "Protection from data breach",
            description:"Safeguard your sensitive information with robust measures, shielding against potential data breaches",
            image: "/assets/bento2.webp",
        },
        {
            title: "Efficient Card Management",
            description:"Safeguard your sensitive information with robust measures, shielding against potential data breaches",
            image: "/assets/bento3.webp",
        },
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3  gap-6 w-full'>
        {bento.map((item,index) => (
            <div key={item.title} className={cn('p-6 rounded-3xl space-y-8 bg-secondary',{
                "flex flex-col-reverse justify-between": index === bento.length - 1,
            })}>
                <div className='space-y-8'>
                    <h1 className='font-semibold text-4xl md:text-5xl'>{item.title}</h1>
                    <p className='text-md text-muted-foreground'>{item.description}</p>
                </div>
                <div className='w-full'>
                    <Image src={item.image} alt={item.title} className='' width={600} height={100}/>
                </div>
            </div>
        ))}
        <div className=' p-8 md:col-span-3 grid md:grid-cols-2 gap-6 items-center rounded-xl bg-secondary'>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-5xl font-semibold'>Swift card <br /> management <br /> options</h1>
                <Button size={"lg"}  className='rounded-xl'>
                    Get the app
                </Button>
            </div>
            <div className='flex flex-col gap-4 '>
                <p className='text-md text-muted-foreground'>Manage your card swiftly and effortlessly, with intuitive options for freezing and unfreezing, all at your fingertips.</p>
                <div className='ml-auto'>
                    <Image src={"/assets/bento4.webp"} alt="bento" width={380} height={100}/>
                </div>
            </div>
        </div>
    </div>
  )
}

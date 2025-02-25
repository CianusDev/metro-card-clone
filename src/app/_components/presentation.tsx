import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Presentation() {
  return (
    <div className='grid grid-cols-1 mt-24 md:grid-cols-2 gap-8 w-full'>
        <div>
            <Image src={"/assets/presentation.webp"} alt="hero" className='rounded-3xl ' width={700} height={400}/>
        </div>
        <div className='flex flex-col gap-8 p-4 justify-center'>
            <h1 className='text-5xl font-semibold'>Empowering Your Financial Freedom</h1>
            <p className='text-md text-muted-foreground'>At our core, we&apos;re dedicated to facilitating seamless financial transactions, empowering individuals and businesses alike to thrive in today&apos;s fast-paced world. With our intuitive platform, you can receive USD in mere minutes, ensuring your transactions are swift and hassle-free.We prioritize your security, giving you peace of mind as you manage your finances. Our card management options are designed with your convenience in mind, providing swift and efficient controls over your funds.</p>
            <div>
                <Button size={"lg"} className='rounded-xl'>
                    Learn More
                </Button>
            </div>
        </div>
    </div>
  )
}

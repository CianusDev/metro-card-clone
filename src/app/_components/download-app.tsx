import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export function DownloadApp() {
  return (
    <div className='mt-24 w-full space-y-8'>
        <div className='rounded-3xl grid grid-cols-1 space-y-4 gap-4 md:grid-cols-2 bg-secondary p-8'>
            <div className='space-y-4'>
                <h1 className=' text-4xl md:text-5xl font-semibold'>Want to try? <br /> Download our app now.</h1>
                <p className='text-muted-foreground'>Traditional credit cards have high fees <br /> and confusing rewards programs.</p>
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
            <div className='relative w-full flex justify-center'>
                <Image src={"/assets/phone.webp"} alt="phone" className='md:absolute bottom-0 m-auto' width={380} height={40}/>
            </div>
        </div>
    </div>
  )
}

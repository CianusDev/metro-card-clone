import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Feedback() {
  return (
    <div className='mt-20 w-full space-y-8'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
            <h1 className='text-5xl font-semibold'>What they say
            <br />
            about us.</h1>
            <div className='flex gap-4'>
                <Button size={"icon"} variant={"secondary"} className='rounded-full size-14'>
                    <ArrowLeft/>
                </Button>
                <Button variant={"secondary"} className='rounded-full size-14'>
                    <ArrowRight size={24}/>
                </Button>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className=' border rounded-xl space-y-4 p-8 transition-all duration-200 ease-in-out hover:bg-secondary'>
                <Image src={'/assets/quote.webp'} alt={'alt'} width={40} height={40}/>
                <h1 className='font-semibold text-xl'>Life-changing Service!</h1>
                <p className='text-muted-foreground'>I never thought getting a credit card could be so easy! Thanks to Metro, I now have access to a world of financial freedom. Highly recommend!</p>
                <div className='flex flex-shrink-0 gap-4 w-full'>
                    <div className='flex-shrink-0'>
                        <Image src={'/assets/profile.webp'} alt={'alt'} className='rounded-full shrink-0' width={40} height={40}/>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='font-semibold'>Tarana Doe</h1>
                        <span className='text-muted-foreground'>Freelance Writer</span>
                    </div>
                </div>
            </div>
            {/* feedback */}
            <div className=' border rounded-xl space-y-4 p-8 transition-all duration-200 ease-in-out hover:bg-secondary'>
                <Image src={'/assets/quote.webp'} alt={'alt'} width={40} height={40}/>
                <h1 className='font-semibold text-xl'>Life-changing Service!</h1>
                <p className='text-muted-foreground'>I never thought getting a credit card could be so easy! Thanks to Metro, I now have access to a world of financial freedom. Highly recommend!</p>
                <div className='flex flex-shrink-0 gap-4 w-full'>
                    <div className='flex-shrink-0'>
                        <Image src={'/assets/profile.webp'} alt={'alt'} className='rounded-full shrink-0' width={40} height={40}/>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='font-semibold'>Tarana Doe</h1>
                        <span className='text-muted-foreground'>Freelance Writer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

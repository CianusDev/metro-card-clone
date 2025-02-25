import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function Feedback() {
  return (
    <div className='mt-24 w-full'>
        <div className='flex items-center justify-between gap-4'>
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
    </div>
  )
}

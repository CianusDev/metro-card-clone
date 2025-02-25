import React from 'react'
import { Hero } from './_components/hero'
import { Partners } from './_components/partners'

export default function Home() {
  return (
    <main className='flex min-h-screen p-2 gap-8 flex-col'>
      <Hero/>
      <Partners/>
    </main>
  )
}

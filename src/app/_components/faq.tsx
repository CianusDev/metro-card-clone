import React from 'react'
import { AccrodionFAQ } from './accordion-faq'

export default function FAQ() {
  return (
    <section className='mt-24 space-y-8 w-full'>
      <h1 className='text-5xl font-semibold'>Frequently
      <br />
      asked question.</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <AccrodionFAQ/>
        <AccrodionFAQ/>
      </div>
    </section>
  )
}

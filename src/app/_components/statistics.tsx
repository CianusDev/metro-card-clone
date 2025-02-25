import React from 'react'

export function Statistics() {
    const statistics = [
        {
            title: "200k+",
            description:"Users",
        },
        {
            title: "$0",
            description:"Monthly fees",
        },
        {
            title: "$500",
            description:"In faster payments",
        },
        {
            title: "4.9",
            description:"Customer rating",
        }
    ]
  return (
    <nav className='grid grid-cols-2 max-w-6xl md:grid-cols-4 gap-8 p-8 w-full'>
        {statistics.map((item, index) => (
        <div key={index} className='flex flex-col  flex-shrink-0 flex-1 items-center gap-4'>
            <h1 className='text-5xl font-semibold'>{item.title}</h1>
            <p className=' text-md flex-shrink-0 text-muted-foreground font-semibold'>{item.description}</p>
        </div>
        ))}
    </nav>
  )
}

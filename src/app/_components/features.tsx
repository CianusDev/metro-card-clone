import { BanknoteIcon, CreditCardIcon, LandmarkIcon, ScanQrCodeIcon, ShapesIcon, Wallet2Icon } from 'lucide-react'
import React from 'react'

export default function Features() {
    const features = [
        {
            title: "Seamless withdrawals",
            description:`Signing up is easy! Just visit our website and click on the "Sign Up" button. Follow the prompts to create your account, and you'll be ready to manage your crypto portfolio in no time.`,
            icon:<BanknoteIcon/>
        },
        {
            title: "Qr pay",
            description:`Signing up is easy! Just visit our website and click on the "Sign Up" button. Follow the prompts to create your account, and you'll be ready to manage your crypto portfolio in no time.`,
            icon:<ScanQrCodeIcon/>
        },
        {
            title: "Instant payments",
            description:`Signing up is easy! Just visit our website and click on the "Sign Up" button. Follow the prompts to create your account, and you'll be ready to manage your crypto portfolio in no time.`,
            icon:<Wallet2Icon/>
        },
        {
            title: "Debit/Credit cards",
            description:`Signing up is easy! Just visit our website and click on the "Sign Up" button. Follow the prompts to create your account, and you'll be ready to manage your crypto portfolio in no time.`,
            icon:<CreditCardIcon/>
        },
        {
            title: "Seamless integration",
            description:`Signing up is easy! Just visit our website and click on the "Sign Up" button. Follow the prompts to create your account, and you'll be ready to manage your crypto portfolio in no time.`,
            icon:<ShapesIcon/>
        },
        {
            title: "Digital bank",
            description:`Signing up is easy! Just visit our website and click on the "Sign Up" button. Follow the prompts to create your account, and you'll be ready to manage your crypto portfolio in no time.`,
            icon:<LandmarkIcon/>
        }
    ]
  return (
    <section className='mt-24 space-y-8 w-full'>
        <div>
            <h1 className='text-5xl  font-semibold'>Why Metrocard is <br /> different from others.</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
            {features.map((item, index) => (
                <div key={index} className='border p-6 space-y-4 rounded-2xl'>
                <div className='size-10 rounded-full bg-secondary flex flex-col items-center justify-center'>
                    {item.icon}
                </div>
                <h1 className='font-semibold text-2xl'>{item.title}</h1>
                <p className='text-muted-foreground'>
                    {item.description}
                </p>
            </div>
            ))}
        </div>
    </section>
  )
}

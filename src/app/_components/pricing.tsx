"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react'
import React from 'react'

type Plan = {
    name: string;
    price: string;
    perUser: boolean;
    description: string;
    primary?:boolean
    features: string[];
  };
  
  const plans: Plan[] = [
    {
      name: "Individual",
      price: "Free",
      perUser: false,
      description: "For solopreneurs, who is actively looking for.",
      features: [
        "Global Debit/credit cards",
        "Business account and bill pay",
        "Integrated expense management",
        "Real-time spend reporting",
        "AI expense tracker",
        "24/7 chat support",
      ],
    },
    {
      name: "Team",
      price: "$18 /month",
      perUser: true,
      description: "For mid-sized team players.",
      features: [
        "Everything in Free plan",
        "Custom expense policies and approvals",
        "Custom procurement workflows",
        "Custom, automated HRIS and advanced accounting integrations",
        "Dedicated support for admins",
      ],
      primary:true
    },
    {
      name: "Agency",
      price: "$50 /month",
      perUser: true,
      description: "For solopreneurs, who is actively looking for.",
      features: [
        "Global Debit/credit cards",
        "Business account and bill pay",
        "Integrated expense management",
        "Real-time spend reporting",
        "AI expense tracker",
        "24/7 chat support",
      ],
    },
  ];
  

export function Pricing() {
  return (
    <div className='mt-24 w-full space-y-8'>
        <h1 className='text-5xl font-semibold'>Get to know about
        <br />
        our pricing</h1>
        <div className='border rounded-3xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {plans.map((plan,index)=>(
                <div key={index} className={cn("space-y-8 rounded-xl p-4",{
                    "bg-primary text-background":plan.primary,
                    "bg-secondary":index===2
                })}>
                <Button className='cursor-default' variant={"secondary"}>{plan.name}</Button>
                <div className=' space-y-2'>
                    <h1 className='text-5xl font-semibold'>{plan.price}</h1>
                    <span className=' text-muted-foreground'>{plan.perUser?"per user":"all user"}</span>
                </div>
                <p className='text-muted-foreground'>{plan.description}</p>

                    <div  className=' space-y-4'>
                    {plan.features.map((feature,index)=>(
                        <div key={index} className='flex gap-4'>
                            <div className={`size-6 p-1 flex items-center ${plan.primary?'bg-background text-primary':'bg-primary text-background'} justify-center rounded-full`}>
                                <Check />
                            </div>
                            <h1>{feature}</h1>
                        </div>
                    ))}
                    <Button size={"lg"} variant={plan.primary?"secondary":"default"} 
                    className='w-full rounded-xl'>Get started for free</Button>
                    </div>
            </div>
            ))}
        </div>
    </div>
  )
}

"use client"
import React from 'react'
import { AnimatePresence } from "motion/react"
export function AnimatedWapper({children}:{children:React.ReactNode}) {
  return (
    <AnimatePresence>{children}</AnimatePresence>
  )
}

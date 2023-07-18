'use client'

import { FC } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className='w-full h-full bg-white bg-gradient-white dark:bg-black dark:bg-gradient-black'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Provider
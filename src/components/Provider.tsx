'use client'

import { FC } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default Provider
'use client'

import { FC, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { BiSolidDog } from 'react-icons/bi'
import { BiMoon } from 'react-icons/bi'
import { BiSun } from 'react-icons/bi'

interface NavbarProps {}

const links = [
  {
    label: 'create',
    url: '/create',
  },
  {
    label: 'temperaments',
    url: '/temps',
  },
  {
    label: 'about',
    url: '/about',
  },
]

const Navbar: FC<NavbarProps> = ({}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme()

  const renderCurrentTheme = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    return currentTheme === 'dark' ? <BiSun size={15} /> : <BiMoon size={15} />
  }

  const themeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-2">
      <Link href={'/'} className="flex-grow-0 basis-0">
        <BiSolidDog className="w-10 h-10 hover:-rotate-12 transition-all" />
      </Link>
      <div className="flex-grow basis-0 flex justify-center items-center gap-4">
        {
          links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="hover:underline underline-offset-2 decoration-2"
            >
              {link.label}
            </a>
          ))
        }
      </div>
      <div
        className="flex-grow-0 basis-0 flex justify-center items-center gap-2 cursor-pointer"
        onClick={themeToggle}
      >
        <p className="text-sm">Theme</p>
        {renderCurrentTheme()}
      </div>
    </nav>
  )
}

export default Navbar

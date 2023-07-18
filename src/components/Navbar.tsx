'use client'

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { BiMoon, BiSolidDog, BiSun } from 'react-icons/bi'

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

  const currentTheme = theme === 'system' ? systemTheme : theme

  const renderCurrentTheme = () => {
    if (!mounted) return null

    return currentTheme === 'dark' ? <BiSun size={15} /> : <BiMoon size={15} />
  }

  const themeToggle = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
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
        className="md:block hidden flex-grow-0 basis-0 cursor-pointer"
        onClick={themeToggle}
      >
        {renderCurrentTheme()}
      </div>
    </nav>
  )
}

export default Navbar

import { FC } from 'react'

interface TitleProps {
  text: string
  className?: string
  small?: boolean
}

const Title: FC<TitleProps> = ({ text, className, small }) => {
  return (
    <h1 className={`${className} ${small ? 'text-2xl' : 'text-4xl'} font-extrabold text-neutral-900 dark:text-neutral-100`}>{text}</h1>
  )
}

export default Title
import { FC } from 'react'

interface TitleProps {
  text: string
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1 className='text-4xl font-extrabold text-neutral-900 dark:text-neutral-100'>{text}</h1>
  )
}

export default Title
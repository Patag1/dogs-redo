import { FC } from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <main className='w-full min-h-screen grid grid-cols-1 grid-rows-[60px_1fr]'>
        <div></div>
        {children}
    </main>
  )
}

export default Container
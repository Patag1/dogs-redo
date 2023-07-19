'use client'

import { FC, useEffect } from 'react'
import DogsSlice from '@/store/DogSlice'
import Title from '@/components/Title'
import { DogApiSelect } from '@/types'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { id: string }
}

const Page: FC<PageProps> = ({ params }) => {
  const { id } = params
  const { getDog } = DogsSlice()

  useEffect(() => {
    getDog(id)
  }, [getDog, id])

  const { dog } = DogsSlice()

  if (!dog) notFound()

  return (
    <main>
      <div className='h-16 w-full'></div>
      <section className='h-full border-2 border-black'>
        <Title text={dog.name} />
      </section>
    </main>
  )
}

export default Page
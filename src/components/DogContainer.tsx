'use client'

import { FC, useEffect } from 'react'
import DogsSlice from '@/store/DogSlice'
import DogCard from './DogCard'
import PageSlice from '@/store/PageSlice'

interface DogContainerProps {}

const DogContainer: FC<DogContainerProps> = ({}) => {
  const { dogs, getAllDogs } = DogsSlice()
  const { last } = PageSlice()

  useEffect(() => {
    getAllDogs()
    last(dogs.length)
  }, [])
  
  return (
    <div className='flex flex-wrap gap-4'>
      {
        dogs.map((dog, i) => (
          <DogCard dog={dog} key={i} />
        ))
      }
    </div>
  )
}

export default DogContainer
import { Dog } from '@prisma/client'
import Image from 'next/image'
import { FC } from 'react'
import Title from './Title'
import { DogApiSelect } from '@/types'

interface DogCardProps {
  dog: DogApiSelect | Dog
}

const DogCard: FC<DogCardProps> = ({ dog }) => {
  const imageUrl = typeof dog.image === 'string' ? dog.image : dog.image.url

  return (
    <div className='flex flex-col'>
        <Image src={imageUrl} alt={`${dog.id}`} width={250} height={400} />
        <div className='flex flex-col'>
            <Title text={dog.name} />
            <div>
                {dog.weight}
            </div>
        </div>
    </div>
  )
}

export default DogCard
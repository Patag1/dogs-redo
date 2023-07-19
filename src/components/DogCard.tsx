import { Dog } from '@prisma/client'
import Image from 'next/image'
import { FC } from 'react'
import Title from './Title'
import { DogApiSelect } from '@/types'
import { BiInfoCircle } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

interface DogCardProps {
  dog: DogApiSelect
}

const DogCard: FC<DogCardProps> = ({ dog }) => {
  const router = useRouter()

  return (
    <div className='w-64 h-80 flex flex-col bg-neutral-200 border-2 border-black rounded-sm overflow-hidden cursor-pointer' onClick={() => router.push(`/home/${dog.id}`)}>
        <div className='w-64 h-44 overflow-hidden border-b-2 border-black'>
          <Image src={dog.image} alt={`${dog.id}`} width={208} height={320} className='h-full w-full object-cover' />
        </div>
        <div className='flex justify-center items-start flex-col w-full p-2'>
            <Title text={dog.name} small className='whitespace-normal' />
            <div className='w-full flex justify-between items-center'>
                {dog.weight}
                <div className='[&>div]:hover:opacity-100 [&>div]:hover:pointer-events-auto'>
                  <BiInfoCircle className='w-5 h-5' />
                  <div className='absolute px-2 py-1 bg-opacity-75 bg-black opacity-0 pointer-events-none rounded-md transition-all text-neutral-200'>
                    <p>Temperaments</p>
                    <div className='w-10/12 mx-[auto] my-1 border-neutral-600 border-b-2 border-opacity-75'></div>
                    {Array.isArray(dog.temperament) && dog.temperament.map((t, i) => (
                      <p key={i}>{t}</p>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DogCard
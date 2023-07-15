import Container from '@/components/Container'
import DogContainer from '@/components/DogContainer'
import Title from '@/components/Title'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <Container>
        <section className='md:w-9/12 md:mx-[auto] mx-4 mb-6 px-8 py-6 rounded-lg grid grid-cols-1 grid-rows-[min-content_1fr_min-content] shadow-lg bg-white'>
            <aside>
                <Title text='Search' />
            </aside>
            <article>
                Dogs...
                <DogContainer/>
            </article>
            <footer>
                Pagination...
            </footer>
        </section>
    </Container>
  )
}

export default page
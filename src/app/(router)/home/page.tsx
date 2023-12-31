import Container from '@/components/Container'
import DogContainer from '@/components/DogContainer'
import Title from '@/components/Title'
import { FC } from 'react'

interface PageProps {}

const page: FC<PageProps> = ({}) => {
  return (
    <Container>
      <section className="md:w-9/12 md:mx-[auto] mx-4 mb-6 px-8 py-6 rounded-lg grid grid-cols-1 grid-rows-[min-content_1fr_min-content] gap-4 shadow-lg bg-neutral-400 dark:bg-neutral-700">
        <aside>
          <Title text="Search" />
        </aside>
        <article>
          <DogContainer />
        </article>
        <footer>Pagination...</footer>
      </section>
    </Container>
  )
}

export default page

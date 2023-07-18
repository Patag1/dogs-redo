import { DogApi } from "@/types"

const selectData = (data: { dogs: DogApi[] }) => {
  const select = data.dogs.map(dog => ({
    id: dog.id,
    image: dog.image.url,
    name: dog.name,
    lifespan: dog.life_span,
    weight: `${dog.weight.metric} kg`,
    temps: dog?.temperament?.split(', ')
  }))

  return select
}

export default selectData
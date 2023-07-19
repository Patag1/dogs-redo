import { DogApi } from "@/types"

const selectData = (data: DogApi[]) => {
  const select = data.map(dog => ({
    id: dog.id,
    image: dog.image.url,
    name: dog.name,
    lifespan: dog.life_span,
    height: `${dog.height} m`,
    weight: `${dog.weight.metric} kg`,
    temperament: dog?.temperament?.split(', ')
  }))

  return select
}

export default selectData
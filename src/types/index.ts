import { Dog } from '@prisma/client'

export interface IParams {
  id?: string
}

export type postDogData = Omit<
  Dog,
  'id'
> & {
  temps: number[]
}

export interface DogApi {
  id: number | string
  image: { url: string }
  name: string
  height: { metric: string }
  weight: { metric: string }
  life_span: string
  temperament: string | ''
}

export type DogApiSelect = Pick<
  DogApi,
  'id' | 'name'
> & {
  image: string
  height: string
  weight: string
  lifespan: string
  temperament: string[] | ''
}

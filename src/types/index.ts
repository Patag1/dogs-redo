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
import { create } from 'zustand'
import { Dog } from '@prisma/client'
import axios from 'axios'

interface DogsSliceProps {
  dogs: [] | Dog[] | Dog
  dog: {} | Dog
  getAllDogs: () => Promise<void>
  getDog: (payload: string) => Promise<void>
  postDog: (payload: Dog) => Promise<void>
  delDog: (payload: string) => Promise<void>
}

const DogsSlice = create<DogsSliceProps>((set) => ({
  dogs: [],
  dog: {},
  getAllDogs: async () => {
    await axios
      .get('api/dogs')
      .then((response) => set({ dogs: response.data }))
  },
  getDog: async (payload) => {
    await axios
      .get(`api/dogs/${payload}`)
      .then((response) => set({ dog: response.data }))
  },
  postDog: async (payload) => {
    await axios
      .post(`api/dogs/${payload.id}`, payload)
  },
  delDog: async (payload) => {
    await axios
      .delete(`api/dogs/${payload}`)
  }
}))

export default DogsSlice
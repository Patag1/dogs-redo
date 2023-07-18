import { create } from 'zustand'
import { Dog } from '@prisma/client'
import axios from 'axios'
import selectData from '@/lib/selectData'
import { DogApiSelect } from '@/types'

interface DogsSliceProps {
  dogs: [] | DogApiSelect[] | Dog[]
  dog: null | Dog
  getAllDogs: () => Promise<void>
  getDog: (payload: string) => Promise<void>
  postDog: (payload: Dog) => Promise<void>
  delDog: (payload: string) => Promise<void>
}

const DogsSlice = create<DogsSliceProps>((set) => ({
  dogs: [],
  dog: null,
  getAllDogs: async () => {
    await axios
      .get('api/home')
      .then((response) => set({ dogs: response.data }))
  },
  getDog: async (payload) => {
    await axios
      .get(`api/home/${payload}`)
      .then((response) => set({ dog: response.data }))
  },
  postDog: async (payload) => {
    await axios
      .post('api/create', payload)
  },
  delDog: async (payload) => {
    await axios
      .delete(`api/home/${payload}`)
  }
}))

export default DogsSlice
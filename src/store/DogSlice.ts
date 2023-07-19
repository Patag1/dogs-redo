import { create } from 'zustand'
import { Dog } from '@prisma/client'
import axios from 'axios'
import selectData from '@/lib/selectData'
import { DogApiSelect } from '@/types'

interface DogsSliceProps {
  dogs: [] | DogApiSelect[]
  dog: null | Dog | DogApiSelect
  getAllDogs: () => Promise<void>
  getDog: (payload: string) => Promise<void>
  postDog: (payload: Dog) => Promise<void>
  delDog: (payload: string) => Promise<void>
}

const DogsSlice = create<DogsSliceProps>((set) => ({
  dogs: [],
  dog: null,
  getAllDogs: async () => {
    const { data } = await axios.get('api/home')
    set({ dogs: selectData(data.dogs) })
  },
  getDog: async (payload) => {
    const { data } = await axios.get(`api/home/${payload}`)
    set({ dog: selectData(data.dogs) })
  },
  postDog: async (payload) => {
    await axios.post('api/create', payload)
  },
  delDog: async (payload) => {
    await axios.delete(`api/home/${payload}`)
  },
}))

export default DogsSlice

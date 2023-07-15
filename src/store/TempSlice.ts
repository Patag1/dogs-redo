import { create } from 'zustand'
import { Temp } from '@prisma/client'
import axios from 'axios'

interface TempSliceProps {
  temps: [] | Temp[]
  getAllTemps: () => Promise<void>
}

const TempSlice = create<TempSliceProps>((set) => ({
  temps: [],
  getAllTemps: async () => {
    await axios
      .get('api/temps')
      .then((response) => set({ temps: response.data }))
  }
}))

export default TempSlice
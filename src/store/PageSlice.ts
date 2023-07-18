import { create } from 'zustand'

interface PageSliceProps {
  page: number
  pages: number
  first: () => void
  prev: () => void
  next: () => void
  last: (num: number) => void
}

const PageSlice = create<PageSliceProps>((set) => ({
  page: 0,
  pages: 0,
  first: () => set({ page: 0 }),
  prev: () => set((state) => ({ page: state.page - 1 })),
  next: () => set((state) => ({ page: state.page + 1 })),
  last: (num) => set({ page: num })
}))

export default PageSlice
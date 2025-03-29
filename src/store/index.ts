import { create } from 'zustand'

type RenderState = {
  rendered: boolean
  setRendered: (value: boolean) => void
  toggleRendered: () => void
}

export const useRenderStore = create<RenderState>((set) => ({
  rendered: false,
  setRendered: (value) => set({ rendered: value }),
  toggleRendered: () => set((state) => ({ rendered: !state.rendered })),
}))

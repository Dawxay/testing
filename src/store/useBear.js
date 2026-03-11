import { create } from "zustand"

export const useBear = create((set) => ({
    bears: 0,
    setBear: (state) => set({ bears: state }),
    addBear: () => set((state) => ({bears: state.bears + 1})),
    removeBear: () => set((state) => ({bears: state.bears - 1}))
}))
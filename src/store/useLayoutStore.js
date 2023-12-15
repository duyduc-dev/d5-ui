import { create } from 'zustand';

const useLayoutStore = create((set) => ({
  isLeftBarOpen: true,
  setLeftBarOpen: (open) => set({ isLeftBarOpen: open }),
}));

export default useLayoutStore;

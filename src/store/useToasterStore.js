import { create } from 'zustand';

const useToasterStore = create((set) => ({
  label: '',
  duration: 4000,
  loading: false,
  visible: false,
  closeOnClick: false,

  setLoading: (isLoad) => {
    set({ loading: isLoad });
  },
  setVisible: (open) => set({ visible: open }),
  setDuration: (ms) => set({ duration: ms }),
  setToast: (data) => {
    set({
      visible: true,
      ...data,
    });
  },
  setCloseOnCLose: (bool) => set({ closeOnClick: bool }),
}));

export default useToasterStore;

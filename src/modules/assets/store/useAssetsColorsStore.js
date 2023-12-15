import { clone } from 'lodash';
import { create } from 'zustand';

const useAssetsColorsStore = create((set, get) => ({
  folders: [{ title: 'Primary' }, { title: 'Secondary' }, { title: 'Third' }],
  colors: [],

  setFolderColors: (data = []) => set({ folders: data }),
  addNewFolderColors: (data) => {
    const state = clone(get());
    state.folders.push(clone(data));
    set({ folders: state.folders });
  },
}));

export default useAssetsColorsStore;

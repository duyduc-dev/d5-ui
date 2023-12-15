import { getRootMenu } from '@components/common/TreeFolder/rawData';
import { create } from 'zustand';

const useLeftBarStore = create((set, get) => ({
  rootMenu: getRootMenu() ?? [],
  templatesFolders: [],
  menuExpanded: [],
  selectedMenu: '',
  currentRootId: '',

  setTemplatesFolders: (folders) => set({ templatesFolders: folders }),
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
  setRootMenu: (menu) => set({ rootMenu: menu }),
  setCurrentRootMenuId: (id) => set({ currentRootId: id }),
  setMenuExpanded: (menu) => set({ menuExpanded: menu }),
  setTreeItemForRoot: (id, treeNode) => {
    const rootMenu = get().rootMenu;
    const newRootMenu = rootMenu.map((rootItem) => {
      if (rootItem.id === id) {
        rootItem.children = treeNode;
      }
      return rootItem;
    });
    set({ rootMenu: newRootMenu });
  },
}));

export default useLeftBarStore;

import { create } from "zustand";

interface ActiveListStore {
  memebrs: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
}

const useActiveList = create<ActiveListStore>((set) => ({
  memebrs: [],
  add: (id) => set((state) => ({ memebrs: [...state.memebrs, id] })),
  remove: (id) =>
    set((state) => ({
      memebrs: state.memebrs.filter((memberId) => memberId !== id),
    })),
  set: (ids) => set({ memebrs: ids }),
}));

export default useActiveList;

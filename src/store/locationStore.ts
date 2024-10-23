import { create } from 'zustand';

interface LocationState {
  city: string;
  setCity: (city: string) => void;
}

const useLocationStore = create<LocationState>((set) => ({
  city: "",
  setCity: (city) => set({ city }),
}));

export default useLocationStore;
import { create } from "zustand";

const useLocationStore = create((set) => ({
  city: "",
  setCity: (city) => set({ city }),
}));

export default useLocationStore;

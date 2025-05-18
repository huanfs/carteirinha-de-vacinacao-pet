import { create } from "zustand";

const useVaccineList = create((set) => ({
  vaccineList: [],
  setVaccine: (value) =>
    set((state) => ({
      vaccineList: [...state.vaccineList, value],
    })),
}));

export default useVaccineList;
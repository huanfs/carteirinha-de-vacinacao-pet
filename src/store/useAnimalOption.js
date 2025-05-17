import {create} from "zustand";

const useAnimalOption = create((set)=>({
    animalOption:"",
    setOption: (value) => set({animalOption:value})
}));

export default useAnimalOption;
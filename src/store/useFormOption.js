import {create} from "zustand";

const useFormOption = create((set) => ({
    option: "",
    setOption: (value) => set({option:value})
}));

export default useFormOption;
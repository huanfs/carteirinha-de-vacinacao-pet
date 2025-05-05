import {create} from "zustand";

const useMenu = create((set) => ({
    isOpen: false,
    setIsOpen: (value) => set({isOpen:value})
}))
export default useMenu;
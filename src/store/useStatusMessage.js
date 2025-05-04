import {create} from "zustand";

const useStatusMessage = create((set) => ({
    message: "",
    setMessage: (value) => (set({message:value}))
}));

export default useStatusMessage;
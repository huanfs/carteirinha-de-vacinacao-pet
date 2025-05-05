import {create} from "zustand";

const useLoading = create((set) => ({
    loading: false,
    setLoading: (value) => set({loading:value})
}));

export default useLoading;
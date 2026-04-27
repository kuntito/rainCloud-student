import { create } from "zustand";
import { Course, dummyCourse } from "../models/course";

interface AppStore {
    selectedCourse: number | null;
    getCourses: () => Course[];
}

const useAppStore = create<AppStore>((set) => {
    const selectedCourse: number | null = null;
    const getCourses = (): Course[] => {
        return [
            dummyCourse,
        ];
    }
    
    return {
        selectedCourse: selectedCourse,
        getCourses: getCourses,
    }
})

export default useAppStore;
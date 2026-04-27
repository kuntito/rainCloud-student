import { create } from "zustand";
import { Course, dummyCourse } from "../models/course";

interface AppStore {
    selectedCourse: Course | null;
    getCourses: () => Course[];
    startCourse: (courseId: number) => void;
}

const useAppStore = create<AppStore>((set, get) => {
    const selectedCourse: Course | null = null;
    const getCourses = (): Course[] => {
        return [
            dummyCourse,
        ];
    }

    const startCourse = (courseId: number) => {
        // TODO not sure i should be making this call
        // do i cache `courses` after a one time call?
        // i'd permit it for the sake of MVP.
        const allCourses = get().getCourses();
        const course = allCourses.find(x => x.id === courseId);

        set({
            selectedCourse: course ?? null
        })
    }
    
    return {
        selectedCourse: selectedCourse,
        getCourses: getCourses,
        startCourse: startCourse,
    }
})

export default useAppStore;
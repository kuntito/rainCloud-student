import { create } from "zustand";
import { Course, dummyCourse } from "../models/course";
import { Module } from "../models/module";

interface AppStore {
    selectedCourse: Course | null;
    curCourseCptIdx: number | null;
    setupModule: (module: Module) => void;
    curModCptIdx: number | null;
    getCourses: () => Course[];
    startCourse: (courseId: number) => void;
    nextCourseCheckpoint: () => void;
}

const useAppStore = create<AppStore>((set, get) => {
    const selectedCourse: Course | null = null;
    const curCourseCptIdx = null;

    const curModCptIdx = null;

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

        if (course != null) {
            set({
                selectedCourse: course,
                curCourseCptIdx: course.courseCheckpoints.length > 0 ? 0 : null
            })
        }
    }
    
    const setupModule = (module: Module) => {
        set({
            curModCptIdx: module.moduleCheckpoints.length > 0 ? 0 : null
        })
    }

    const nextCourseCheckpoint = () => {

    }

    return {
        selectedCourse: selectedCourse,
        curCourseCptIdx: curCourseCptIdx,
        setupModule: setupModule,
        curModCptIdx: curModCptIdx,
        getCourses: getCourses,
        startCourse: startCourse,
        nextCourseCheckpoint: nextCourseCheckpoint,
    }
})

export default useAppStore;
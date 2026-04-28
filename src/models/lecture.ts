import { dummyTextLS, dummyTextLSTwo, dummyVideoLS, LectureSection } from "./lectureSection";

export interface Lecture {
    id: number;
    lectureSections: LectureSection[]
}


export const dummyLecture: Lecture = {
    id: 0,
    lectureSections: [
        dummyTextLS,
        dummyVideoLS,
        dummyTextLSTwo,
    ]
}

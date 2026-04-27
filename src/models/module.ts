import { dummyLecture, Lecture } from "./lecture";
import { McqAssessment } from "./mcqAssessment";

export interface Module {
    moduleTitle: string;
    lectures: Lecture[];
    currentLectureIndex: number;
    mcqAssessment?: McqAssessment;
}

export const dummyModule: Module = {
    moduleTitle: "Foundations of AI and ML",
    lectures: [
        dummyLecture,
    ],
    currentLectureIndex: 0,
}
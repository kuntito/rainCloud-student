import { dummyCourseAssessment, dummyMcqAssessment, McqAssessment } from "./mcqAssessment";
import { dummyModule, Module } from "./module";

export interface Course {
    id: number;
    courseTitle: string;
    courseDescParagraphs: string[];
    courseCheckpoints: CourseCheckpoint[];
}

export type CourseCheckpoint =
    | { type: "module"; data: Module }
    | { type: "mcq"; data: McqAssessment };

    
export const dummyCourse: Course = {
    id: 0,
    courseTitle: "AI/ML Fundamentals",
    courseDescParagraphs: [
        "An introduction to the core ideas behind artificial intelligence.",
        "A first look at how models are trained and evaluated."
    ],
    courseCheckpoints: [
        { type: "module", data: dummyModule },
        { type: "module", data: dummyModule },
        { type: "mcq", data: dummyCourseAssessment },
    ],
}
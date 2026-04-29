import { dummyLecture, Lecture } from "./lecture";
import { dummyMcqAssessment, McqAssessment } from "./mcqAssessment";

export interface Module {
    moduleTitle: string;
    moduleCheckpoints: ModuleCheckpoint[];
}

export type ModuleCheckpoint = 
    | { type: "lecture"; data: Lecture }
    | { type: "mcq"; data: McqAssessment };


export const dummyModule: Module = {
    moduleTitle: "Foundations of AI and ML",
    moduleCheckpoints: [
        { type: "lecture", data: dummyLecture },
        { type: "mcq", data: dummyMcqAssessment },
        { type: "lecture", data: dummyLecture },
    ]
}
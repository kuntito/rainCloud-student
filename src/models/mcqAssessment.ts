import { dummyMcqQuestion, dummyMcqQuestionTwo, McqQuestion } from "./mcqQuestion";

export interface McqAssessment {
    title: string;
    questions: McqQuestion[];
}

// TODO data types, differentiate between module assessment and course assessment
export const dummyMcqAssessment: McqAssessment = {
    title: "AI/ML fundamentals",
    questions: [
        dummyMcqQuestion,
        dummyMcqQuestionTwo,
        dummyMcqQuestion,
        dummyMcqQuestionTwo,
    ]
}

export const dummyCourseAssessment: McqAssessment = {
    title: "Final Assessment",
    questions: [
        dummyMcqQuestion,
        dummyMcqQuestionTwo,
        dummyMcqQuestion,
        dummyMcqQuestionTwo,
    ]
}
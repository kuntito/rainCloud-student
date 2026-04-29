import { McqAssessment } from "./mcqAssessment";

export interface McqQuestion {
    questionText: string;
    questionImageUrl?: string;
    options: McqOption[];
}

export interface McqOption {
    text: string;
}

export const dummyMcqQuestion: McqQuestion = {
    questionText: "A model achieves 99% accuracy on the training set but only 62% on the test set. What is the most likely diagnosis?",
    options: [
        { text: "Underfitting" },
        { text: "Overfitting" },
        { text: "The test set is mislabeled" },
    ]
}

export const dummyMcqQuestionTwo: McqQuestion = {
    questionText: "The plot shows three models fit to the same data. Which one is most likely overfitting?",
    questionImageUrl: "https://sounds-xyz.s3.eu-north-1.amazonaws.com/albumArt/artworkUnknown.png",
    options: [
        { text: "The straight line" },
        { text: "The smooth curve" },
        { text: "The wiggly curve that passes through every point" },
    ]
}
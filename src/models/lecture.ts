import { dummyTextLS, dummyTextLSTwo, dummyVideoLS, LectureSection } from "./lectureSection";
import { TextSection } from "./textSection";

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


export const dummyLectureMas: Lecture = {
    id: 1,
    lectureSections: [
        {
            type: "text",
            id: 0,
            sectionTitle: "Loss Functions and Gradient Descent",
            paragraphs: [
                "A loss function measures how wrong the model's predictions are. Training is the process of adjusting the model's parameters to make this number smaller.",
                "Gradient descent is the standard way to do this. The gradient tells you which direction increases the loss.",
            ]
        } as LectureSection,
        {
            type: "text",
            id: 0,
            sectionTitle: "Choosing the Right Metric",
            paragraphs: [
                "The right metric depends on what mistakes cost. In fraud detection, missing a fraud is far worse than flagging a clean transaction, so recall matters more than raw accuracy.",
                "For balanced problems, accuracy may be fine. For imbalanced ones, precision, recall, F1, or ROC-AUC give a clearer picture of where the model is succeeding and failing.",
            ]
        } as LectureSection,
    ]
}
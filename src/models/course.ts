import { dummyModule, Module } from "./module";

export interface Course {
    id: number;
    courseTitle: string;
    courseDescParagraphs: string[];
    modules: Module[];
    currentModuleIndex: number;
}

export const dummyCourse: Course = {
    id: 0,
    courseTitle: "AI/ML Fundamentals",
    courseDescParagraphs: [
        "An introduction to the core ideas behind artificial intelligence.",
        "A first look at how models are trained and evaluated."
    ],
    modules: [
        dummyModule
    ],
    currentModuleIndex: 0,
}
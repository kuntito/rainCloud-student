import { TextSection } from "./textSection";
import { VideoSection } from "./videoSection";

export type LectureSection =
    | (TextSection & { type: "text" })
    | (VideoSection & { type: "video" });


export const dummyTextLS: LectureSection = {
    type: "text",
    id: 0,
    sectionTitle: "AI vs. ML vs. Deep Learning",
    paragraphs: [
        "Artificial intelligence is the broad goal of getting machines to do things that would normally require human intelligence. ",
        "Deep learning is a further subset of machine learning that uses neural networks with many layers.",
    ]
}

export const dummyTextLSTwo: LectureSection = {
    type: "text",
    id: 0,
    sectionTitle: "Why Models Need to Generalize",
    paragraphs: [
        "A model that memorizes its training data perfectly is not useful. What we want is generalization: good performance on new, unseen examples.",
        "The gap between training performance and test performance is the first thing practitioners look at. A large gap usually means the model has learned noise rather than signal.",
    ]
}

export const dummyVideoLS: LectureSection = {
    type: 'video',
    videoTitle: "A Visual Tour of Machine Learning",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    videoSynopsis: "lorem ipsum consecuteur. eni vieci arano"
}
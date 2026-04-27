export interface TextSection {
    id: number;
    sectionTitle: string;
    paragraphs: string[];
};

export const dummyTextSection: TextSection = {
    id: 0,
    sectionTitle: "AI vs. ML vs. Deep Learning",
    paragraphs: [
        "Artificial intelligence is the broad goal of getting machines to do things that would normally require human intelligence. ",
        "Deep learning is a further subset of machine learning that uses neural networks with many layers.",
    ]
};
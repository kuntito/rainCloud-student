import { Box, StackProps, VStack } from "@chakra-ui/react";
import { Lecture } from "../../../../../../../../../models/lecture";
import { LectureSection } from "../../../../../../../../../models/lectureSection";
import VideoSectionItem from "./VideoSectionItem";
import TextSectionItem from "./text-section/TextSectionItem";
import { dummyMcqAssessment } from "../../../../../../../../../models/mcqAssessment";
import McqAssessmentFrame from "../../../../../McqAssessment/McqAssessmentFrame";

interface Props extends StackProps {
    lecture: Lecture;
}

const LectureContent = ({ lecture, ...stackProps }: Props ) => {
    return (
        <VStack
            flex={1}
            w={"100%"}
            overflowY={"auto"}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    bg: 'palette.flask',
                },
                '&::-webkit-scrollbar-thumb': {
                    bg: 'palette.esp',
                    borderRadius: '4px',
                },
            }}
            px={"16px"}
            {...stackProps}
        >
            <VStack
                maxW={{
                    md: "628px"
                }}
                gap={"48px"}
                align={"flex-start"}
            >
                {lecture.lectureSections.map( (ls, idx) => 
                    renderLectureContent(
                        idx,
                        ls
                    )
                )}
            </VStack>
        </VStack>
    )
}

export default LectureContent;


const renderLectureContent = (
    key: number,
    ls: LectureSection
) => {
    switch (ls.type) {
        case 'text':
            return <TextSectionItem
                key={key}
                textSection={ls}
            />;
        case 'video':
            return <VideoSectionItem
                key={key}
                videoSection={ls}
            />;
    }
}
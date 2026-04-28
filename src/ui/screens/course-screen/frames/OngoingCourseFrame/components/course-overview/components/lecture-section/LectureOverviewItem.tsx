import { VStack, Text } from "@chakra-ui/react";
import TextLsOverviewItem from "./TextLsOverviewItem";
import VideoLSOverviewItem from "./VideoLSOverviewItem";
import { Lecture } from "../../../../../../../../../models/lecture";
import { LectureSection } from "../../../../../../../../../models/lectureSection";

interface Props {
    lectureOrder: number;
    lecture: Lecture;
}

const LectureOverviewItem = ({ 
    lectureOrder,
    lecture
}: Props) => {
    return (
        <VStack
            align={"flex-start"}
            gap={"2px"}
        >
            <Text
                textStyle={"onaregz"}
                color={"palette.esp"}
            >
                Lecture {lectureOrder}
            </Text>
            <VStack
                align={"flex-start"}
                gap={"4px"}
            >
                {lecture.lectureSections.map((ls, idx) => 
                    renderLectureSection(idx, ls)
                )}
            </VStack>
        </VStack>
    )
}

export default LectureOverviewItem;



const renderLectureSection = (
    key: number,
    ls: LectureSection
) => {
    switch(ls.type) {
        case 'text':
            return <TextLsOverviewItem key={key} textSection={ls} />;
        case 'video':
            return <VideoLSOverviewItem key={key} videoSection={ls} />
    }
}
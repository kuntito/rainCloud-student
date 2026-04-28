import { Flex, VStack } from "@chakra-ui/react";
import { Lecture } from "../../../../../../../../../models/lecture";

interface Props {
    lecture: Lecture;
}

const ModuleLectureContent = ({ lecture }: Props) => {
    return (
        <VStack
            flex={1}          
        >
            {lecture.lectureSections.map(x => 
                
            )}
        </VStack>
    )
}

export default ModuleLectureContent
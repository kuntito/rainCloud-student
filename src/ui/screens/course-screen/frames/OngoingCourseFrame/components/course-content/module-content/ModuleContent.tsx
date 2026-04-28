import { Flex, FlexProps } from "@chakra-ui/react";
import { Module } from "../../../../../../../../models/module";
import LectureContent from "./components/LectureContent";
import ModuleHeader from "./components/ModuleHeader";


interface Props extends FlexProps {
    module: Module;
}

const ModuleContent = ({ module, ...flexProps }: Props) => {

    const currentLecture = module.lectures[module.currentLectureIndex];

    return (
        <Flex
            w={"100%"}
            flex={1}
            align={"flex-start"}
            flexDir={"column"}
            gap={"24px"}
            overflow={"hidden"}
            {...flexProps}
            pb={"32px"}
        >
            <ModuleHeader moduleTitle={module.moduleTitle} />
            <LectureContent
                lecture={currentLecture} 
                
            />
        </Flex>
    )
}

export default ModuleContent
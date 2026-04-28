import { VStack, StackProps } from "@chakra-ui/react";
import { Module } from "../../../../../../../../models/module";
import HeaderModuleOverviewItem from "./HeaderModuleOverviewItem";
import LectureOverviewItem from "./lecture-section/LectureOverviewItem";


interface Props extends StackProps {
    moduleOrder: number;
    module: Module;
}

const ModuleOverviewItem = ({ 
    moduleOrder,
    module,
    ...stackProps
}: Props) => {
    return (
        <VStack
            align={"flex-start"}
            {...stackProps}
        >
            <HeaderModuleOverviewItem
                moduleOrder={moduleOrder}
                module={module}
            />
            <VStack
                gap={"16px"}
            >
                {module.lectures.map((lecture, idx) => 
                    <LectureOverviewItem
                        key={idx}
                        lectureOrder={idx + 1}
                        lecture={lecture}
                        opacity={module.currentLectureIndex >= idx ? 1 : 0.3}
                    />
                )}
            </VStack>
        </VStack>
    )
}

export default ModuleOverviewItem
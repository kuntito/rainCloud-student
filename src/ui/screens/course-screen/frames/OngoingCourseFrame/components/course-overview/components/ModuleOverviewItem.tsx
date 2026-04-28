import { Text, VStack } from "@chakra-ui/react";
import { Module } from "../../../../../../../../models/module";
import HeaderModuleOverviewItem from "./HeaderModuleOverviewItem";
import LectureOverviewItem from "./lecture-section/LectureOverviewItem";


interface Props {
    moduleOrder: number;
    module: Module;
}

const ModuleOverviewItem = ({ 
    moduleOrder,
    module
}: Props) => {
    return (
        <VStack
            align={"flex-start"}
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
                    />
                )}
            </VStack>
        </VStack>
    )
}

export default ModuleOverviewItem
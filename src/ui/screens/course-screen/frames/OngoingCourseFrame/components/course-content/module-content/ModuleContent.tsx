import { Flex, FlexProps } from "@chakra-ui/react";
import { Module, ModuleCheckpoint } from "../../../../../../../../models/module";
import LectureContent from "./components/LectureContent";
import ModuleHeader from "./components/ModuleHeader";
import useAppStore from "../../../../../../../../state-management/appStore";
import { useEffect } from "react";
import McqAssessmentFrame from "../../../../McqAssessment/McqAssessmentFrame";


interface Props extends FlexProps {
    module: Module;
}

const ModuleContent = ({ module, ...flexProps }: Props) => {

    const setupModule = useAppStore(s => s.setupModule);
    useEffect(() => {
        setupModule(module)
    }, []);

    const modCptIdx = useAppStore(s => s.curModCptIdx);
    if (modCptIdx == null)
        return null;

    const moduleCheckpoint = module.moduleCheckpoints[modCptIdx];

    return (
        <Flex
            w={"100%"}
            flex={1}
            align={"flex-start"}
            flexDir={"column"}
            gap={"24px"}
            overflow={"hidden"}
            {...flexProps}
        >
            <ModuleHeader moduleTitle={module.moduleTitle} />
            {renderModuleCheckpoint(moduleCheckpoint)}
        </Flex>
    )
}

export default ModuleContent


const renderModuleCheckpoint = (
    moduleCheckpoint: ModuleCheckpoint
) => {
    switch (moduleCheckpoint.type) {
        case 'lecture':
            return <LectureContent
                lecture={moduleCheckpoint.data}
            />
        case 'mcq':
            return <McqAssessmentFrame
                mcqAssessment={moduleCheckpoint.data}
            />
    }
}
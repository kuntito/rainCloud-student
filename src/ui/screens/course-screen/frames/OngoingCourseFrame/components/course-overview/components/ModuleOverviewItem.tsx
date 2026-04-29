import { VStack, StackProps, Box } from "@chakra-ui/react";
import { Module, ModuleCheckpoint } from "../../../../../../../../models/module";
import HeaderModuleOverviewItem from "./HeaderModuleOverviewItem";
import LectureOverviewItem from "./lecture-section/LectureOverviewItem";
import McqAssessmentOverviewItem from "./McqAssessmentOverviewItem";
import useAppStore from "../../../../../../../../state-management/appStore";


interface Props extends StackProps {
    moduleOrder: number;
    module: Module;
    isModuleUnreached: boolean;
}

const ModuleOverviewItem = ({ 
    moduleOrder,
    module,
    isModuleUnreached,
    ...stackProps
}: Props) => {
    const lectureNumbers = getLectureNumbers(
        module.moduleCheckpoints
    );

    const curModCptIdx = useAppStore(s => s.curModCptIdx);
    if (curModCptIdx == null) return;

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
                {module.moduleCheckpoints.map((cpt, idx) => 
                    <Box
                        pointerEvents={idx > curModCptIdx ? "none" : "auto"}
                        opacity={!isModuleUnreached && (idx > curModCptIdx) ? 0.3 : "auto"}
                        w={"100%"}                
                    >
                        {renderOverviewModuleCheckpoint(
                            idx,
                            lectureNumbers[idx],
                            cpt
                        )}
                    </Box>
                )}
            </VStack>
        </VStack>
    )
}

export default ModuleOverviewItem


// TODO grey out check points user hasn't reached.

// TODO
// shouldn't be passing `lectureOrder` here for a generic `renderModuleCheckpoint` method.
// the checkpoint type should know all that it needs to render.
// one approach is to enrich the checkpoint data before rendering —
// define a type that includes derived info like `lectureOrder`,
// then pass that enriched type to this method instead.
const renderOverviewModuleCheckpoint = (
    key: number,
    lectureOrder: number,
    cpt: ModuleCheckpoint
) => {
    switch(cpt.type) {
        case 'lecture':
            return <LectureOverviewItem
                key={key}
                lectureOrder={lectureOrder}
                lecture={cpt.data}
            />
        case 'mcq':
            return <McqAssessmentOverviewItem
                key={key}
                mcq={cpt.data}
            />
    }
}


/**
 * a module is made up of check points.
 * some of which are lectures, some, assessments.
 * 
 * when rendering lecture overview items
 * i include the lecture's number in the sequence
 *  i.e. 'Lecture 1', 'Lecture 2'
 * 
 * these numbers don't exist in the module checkpoints.
 * i generate them here.
 * 
 * i create an array that's the same size as the module checkpoints.
 * and for every lecture i find, i keep appending the lecture number to the array.
 * 
 * so `moduleCheckpoints[idx]` always maps to the right lecture number `lectureNumbers[idx]`
 * for non-lecture checkpoints, i never access the index, so their values are irrelevant.
 * but it's worth pointing out.
 * 
 * for example:
 * 
 *  moduleCheckpoints = `[lecture, assessment, lecture]`
 * 
 *  lectureNumbers = `[1, 1, 2]`
 */
const getLectureNumbers = (
    moduleCheckpoints: ModuleCheckpoint[]
): number[] => {
    const lectureNumbers: number[] = [];

    let lectureOrder = 0;
    for (const cpt of moduleCheckpoints) {
        if (cpt.type === 'lecture') {
            lectureOrder += 1;
        }
        lectureNumbers.push(lectureOrder);
    }

    return lectureNumbers;
}
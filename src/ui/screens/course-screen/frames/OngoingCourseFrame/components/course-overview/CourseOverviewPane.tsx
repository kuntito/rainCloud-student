import { Box, HStack, StackProps, VStack } from "@chakra-ui/react"
import { Course, CourseCheckpoint } from "../../../../../../../models/course"
import useAppStore from "../../../../../../../state-management/appStore"
import AppIconButton from "../../../../../../components/AppIconButton"
import { CloseIcon } from "../../../../../../components/appIcons/CloseIcon"
import McqAssessmentOverviewItem from "./components/McqAssessmentOverviewItem"
import ModuleOverviewItem from "./components/ModuleOverviewItem"


interface Props extends StackProps {
    course: Course
}

const CourseOverviewPane = ({ 
    course,
    ...stackProps
}: Props) => {
    const moduleNumbers = getModuleNumbers(
        course.courseCheckpoints
    );

    const curCourseCptIdx = useAppStore(s => s.curCourseCptIdx);
    if (curCourseCptIdx == null) return;

    return (
        // TODO, make overview items clickable
        <VStack
            w={"256px"}
            h={"100%"}
            borderRadius={"16px"}
            pt={"16px"}
            {...stackProps}
        >
            <HStack 
                justifyContent={"end"}
                w={"100%"}
            >
                <AppIconButton
                    icon={<CloseIcon />}
                    iconColor="palette.esp"
                    onClick={() => {}}
                />
            </HStack>
            <VStack
                px={"16px"}
                flex={1}
                overflowY={"auto"}
                gap={"48px"}
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
            >
                {course.courseCheckpoints.map((cpt, idx) => 
                    <Box
                        pointerEvents={idx > curCourseCptIdx ? "none" : "auto"}
                        opacity={idx > curCourseCptIdx ? 0.1 : "auto"}
                        w={"100%"}
                    >
                        {
                            renderOverviewCourseCheckpoint(
                                idx,
                                moduleNumbers[idx],
                                cpt,
                                idx > curCourseCptIdx,
                            )
                        }
                    </Box>
                )}
            </VStack>
        </VStack>
    )
}

export default CourseOverviewPane


// TODO grey out check points user hasn't reached.

// TODO
// shouldn't be passing `moduleOrder` here for a generic `renderOverviewCourseCheckpoint` method.
// the checkpoint type should know all that it needs to render.
// one approach is to enrich the checkpoint data before rendering —
// define a type that includes derived info like `moduleOrder`,
// then pass that enriched type to this method instead.
const renderOverviewCourseCheckpoint = (
    key: number,
    moduleOrder: number,
    cpt: CourseCheckpoint,
    isModuleUnreached: boolean,
) => {
    switch (cpt.type) {
        case 'module':
            return <ModuleOverviewItem
                key={key}
                moduleOrder={moduleOrder}
                module={cpt.data}
                isModuleUnreached={isModuleUnreached}
            />
        case 'mcq':    
            return <McqAssessmentOverviewItem
                key={key}
                mcq={cpt.data}
            />
    }
}

/**
 * a course is made up of check points.
 * some of which are modules, some, assessments.
 * 
 * when rendering module overview items
 * i include the module's number in the sequence 
 *  i.e. 'Module 1', 'Module 2' 
 * 
 * these numbers don't exist in the course checkpoints.
 * i generate them here.
 * 
 * i create an array that's the same size as the course checkpoints.
 * and for every module i find, i keep appending the module number to the array.
 * 
 * so `courseCheckpoints[idx]` always maps to the right module number `moduleNumbers[idx]`
 * for non-module checkpoints, i never access the index, so their values are irrelevant.
 * but it's worth pointing out.
 * 
 * for example:
 * 
 *  courseCheckpoints = `[module, assessment, module]`
 * 
 *  moduleNumbers = `[1, 1, 2]`
 */
const getModuleNumbers = (
    courseCheckpoints: CourseCheckpoint[]
): number[] => {
    const moduleNumbers: number[] = [];

    let moduleOrder = 0;
    for (const cpt of courseCheckpoints) {
        if (cpt.type === 'module'){
            moduleOrder += 1;
        }
        moduleNumbers.push(moduleOrder);
    }

    return moduleNumbers;
}
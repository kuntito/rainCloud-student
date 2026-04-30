import { Flex, HStack } from "@chakra-ui/react"
import { Course, CourseCheckpoint } from "../../../../../../../models/course"
import ModuleContent from "./module-content/ModuleContent";
import AppButton from "../../../../../../components/AppButton";
import McqAssessmentFrame from "../../../McqAssessment/McqAssessmentFrame";
import { dummyMcqAssessment } from "../../../../../../../models/mcqAssessment";
import useAppStore from "../../../../../../../state-management/appStore";

interface Props {
    course: Course;
    goToHomeScreen: () => void;
}


const CourseContentFrame = ({ 
    course,
    goToHomeScreen,
}: Props) => {
    const nextCourseCheckpoint = useAppStore(s => s.nextCourseCheckpoint);

    const courseCheckpointIndex = useAppStore(s => s.curCourseCptIdx);
    if (courseCheckpointIndex == null)
        return null;


    const courseCheckpoint = course.courseCheckpoints[courseCheckpointIndex];

    // TODO remove this, replace with relevant impl
    const onActionButtonClick = courseCheckpoint.type == 'module' ? nextCourseCheckpoint : goToHomeScreen

    return (
        <Flex
            w={"100%"}
            h={"100%"}
            bg={{
                md: "palette.meta"
            }}
            borderRadius={"16px"}
            maxW={"928px"}
            flexDirection={"column"}
            align={"center"}
            pt={{
                md: "16px"
            }}
            px={{
                md: "16px"
            }}
        >

            {renderCourseCheckpoint(courseCheckpoint)}
            <HStack
                w={"100%"}
                pe={"32px"}
                pt={"16px"}
                pb={{
                    md: "16px"
                }}
                justifyContent={courseCheckpoint.type === 'mcq'? "center" : "end"}
            >
                {/* TODO this button only checks for assessment on course level not module level also */}
                <AppButton
                    onClick={onActionButtonClick}
                >
                    {courseCheckpoint.type === 'mcq' ? 'submit' : 'next'}
                </AppButton>
            </HStack>
        </Flex>
    )
}

export default CourseContentFrame

const renderCourseCheckpoint = (cpt: CourseCheckpoint) => {
    switch (cpt.type) {
        case 'module':
            return <ModuleContent 
                module={cpt.data}
            />;
        case 'mcq':
            return <McqAssessmentFrame
                mcqAssessment={cpt.data}
            />;
    }
}
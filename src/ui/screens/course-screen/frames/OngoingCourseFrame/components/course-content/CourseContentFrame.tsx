import { Flex, HStack } from "@chakra-ui/react"
import { Course, CourseCheckpoint } from "../../../../../../../models/course"
import ModuleContent from "./module-content/ModuleContent";
import AppButton from "../../../../../../components/AppButton";
import McqAssessmentFrame from "../../../McqAssessment/McqAssessmentFrame";
import { dummyMcqAssessment } from "../../../../../../../models/mcqAssessment";
import useAppStore from "../../../../../../../state-management/appStore";

interface Props {
    course: Course;
}


const CourseContentFrame = ({ course }: Props) => {
    const courseCheckpointIndex = useAppStore(s => s.curCourseCptIdx);
    if (courseCheckpointIndex == null)
        return;

    const courseCheckpoint = course.courseCheckpoints[courseCheckpointIndex];

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
                <AppButton>
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
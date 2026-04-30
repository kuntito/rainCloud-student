import { Flex, VStack } from "@chakra-ui/react"
import AppHeader from "../../components/AppHeader"
import useAppStore from "../../../state-management/appStore"
import CourseList from "./frames/CourseListFrame/CourseList";
import OngoingCourseFrame from "./frames/OngoingCourseFrame/OngoingCourseFrame";
import McqAssessmentFrame from "./frames/McqAssessment/McqAssessmentFrame";
import { dummyMcqAssessment } from "../../../models/mcqAssessment";

interface Props {
    goToHomeScreen: () => void;
}

const CourseScreen = ({
    goToHomeScreen
}: Props) => {
    const selectedCourse = useAppStore(s => s.selectedCourse);
    const getCourses = useAppStore(s => s.getCourses);

    const courses = getCourses();
    return (
        <VStack
            gap={0}
            w={"100%"}
            h={"100%"}
        >
            <AppHeader />
            <Flex
                flexDirection={"column"}
                w={"100%"}
                h={"100%"}
                justifyContent={"flex-start"}
                flex={1}
                overflow={"hidden"}
            >
                {
                    selectedCourse 
                        ? <OngoingCourseFrame
                            course={selectedCourse}
                            goToHomeScreen={goToHomeScreen}
                        />
                        : <CourseList courses={courses} />
                }
                
            </Flex>
        </VStack>
    )
}

export default CourseScreen
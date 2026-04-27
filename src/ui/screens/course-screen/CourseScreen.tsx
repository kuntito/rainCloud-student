import { Flex, VStack } from "@chakra-ui/react"
import AppHeader from "../../components/AppHeader"
import useAppStore from "../../../state-management/appStore"
import CourseList from "./components/CourseList";
import OngoingCourseFrame from "./components/ongoing-course/OngoingCourseFrame";

const CourseScreen = () => {
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
                        ? <OngoingCourseFrame course={selectedCourse} />
                        : <CourseList courses={courses} />
                    }
                
            </Flex>
        </VStack>
    )
}

export default CourseScreen
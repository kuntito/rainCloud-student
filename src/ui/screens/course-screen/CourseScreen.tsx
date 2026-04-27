import { Flex, VStack } from "@chakra-ui/react"
import AppHeader from "../../components/AppHeader"
import useAppStore from "../../../state-management/appStore"
import CourseList from "./components/CourseList";

const CourseScreen = () => {
    const selectedCourse = useAppStore(s => s.selectedCourse);
    const getCourses = useAppStore(s => s.getCourses);

    const courses = getCourses();
    return (
        <VStack
            gap={0}
            w={"100vw"}
            h={"100vh"}
        >
            <AppHeader />
            <Flex
                flexDirection={"column"}
                w={"100%"}
                h={"100%"}
                justifyContent={"center"}
            >
                {selectedCourse ? null : <CourseList courses={courses} />}
                
            </Flex>
        </VStack>
    )
}

export default CourseScreen
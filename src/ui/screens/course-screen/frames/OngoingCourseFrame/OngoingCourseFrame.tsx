import { HStack } from "@chakra-ui/react"
import { Course } from "../../../../../models/course"
import CourseContentFrame from "./components/course-content/CourseContentFrame"
import CourseOverviewPane from "./components/course-overview/CourseOverviewPane"


interface Props {
    course: Course
}

const OngoingCourseFrame = ({ course }: Props) => {
    return (
        <HStack
            overflow={"hidden"}
            w={"100%"}
            h={"100%"}
            px={"32px"}
            pb={"32px"}
            gap={"32px"}
        >   
            <CourseOverviewPane
                course={course}
                display={{
                    base: "none",
                    md: "flex"
                }}
            />
            <CourseContentFrame course={course} />
        </HStack>
    )
}

export default OngoingCourseFrame
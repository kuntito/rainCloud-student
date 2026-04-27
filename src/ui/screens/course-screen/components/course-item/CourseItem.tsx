import { VStack, Text } from "@chakra-ui/react"
import CourseTitle from "./CourseTitle"
import CourseDescParagraph from "./CourseDescParagraph";
import { Course } from "../../../../../models/course";
import AppButton from "../../../../components/AppButton";
import useAppStore from "../../../../../state-management/appStore";

interface Props {
    course: Course;
}

const CourseItem = (
    { course }: Props
) => {

    const startCourse = useAppStore(s => s.startCourse);

    return (
        <VStack
            borderRadius={"16px"}
            bg={"palette.flask"}
            gap={"10px"}
            padding={"16px"}
            w={{
                base: "302px",
                md: "482px"
            }}
        >
            <CourseTitle courseTitle={course.courseTitle} />
            <VStack
                align={"flex-start"}
            >
                {course.courseDescParagraphs.map((item, idx) => (
                    <CourseDescParagraph
                        key={idx}
                        paragraphText={item}
                    />
                ))}
            </VStack>
            <AppButton
                onClick={() => startCourse(course.id)}
            >
                start course
            </AppButton>
        </VStack>
    )
}

export default CourseItem
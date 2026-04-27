import { VStack, Text } from "@chakra-ui/react"
import CourseTitle from "./CourseTitle"
import { Course } from "../../../models/course";
import CourseDescParagraph from "./CourseDescParagraph";
import AppButton from "../AppButton";

interface Props {
    course: Course;
}

const CourseItem = (
    { course }: Props
) => {
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
            <AppButton>
                start course
            </AppButton>
        </VStack>
    )
}

export default CourseItem
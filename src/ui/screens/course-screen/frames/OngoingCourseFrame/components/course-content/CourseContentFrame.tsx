import { Flex } from "@chakra-ui/react"
import { Course } from "../../../../../../../models/course"
import ModuleContent from "./module-content/ModuleContent";

interface Props {
    course: Course;
}

// TODO, maybe add the next-button here.
const CourseContentFrame = ({ course }: Props) => {
    const currentModule = course.modules[course.currentModuleIndex];

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
        >
            <ModuleContent 
                module={currentModule}
                pt={{
                    md: "16px"
                }}
                px={{
                    md: "16px"
                }}
            />
        </Flex>
    )
}

export default CourseContentFrame
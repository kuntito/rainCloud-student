import { Flex, HStack } from "@chakra-ui/react"
import { Course } from "../../../../../../../models/course"
import ModuleContent from "./module-content/ModuleContent";
import AppButton from "../../../../../../components/AppButton";

interface Props {
    course: Course;
}


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
            <HStack
                w={"100%"}
                pe={"32px"}
                pb={{
                    md: "16px"
                }}
                justifyContent={"end"}
            >
                <AppButton>
                    next
                </AppButton>
            </HStack>
        </Flex>
    )
}

export default CourseContentFrame
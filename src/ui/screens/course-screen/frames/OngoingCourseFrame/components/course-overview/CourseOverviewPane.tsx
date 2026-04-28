import { HStack, StackProps, VStack } from "@chakra-ui/react"
import { CloseIcon } from "../../../../../../components/appIcons/CloseIcon"
import { Course } from "../../../../../../../models/course"
import ModuleOverviewItem from "./components/ModuleOverviewItem"
import AppIconButton from "../../../../../../components/AppIconButton"


interface Props extends StackProps {
    course: Course
}

const CourseOverviewPane = ({ 
    course,
    ...stackProps
}: Props) => {
    return (
        // TODO, make items clickable
        // TODO, disable lectures after current lecture
        // TODO, diable modules after current module
        <VStack
            w={"256px"}
            h={"100%"}
            borderRadius={"16px"}
            pt={"16px"}
            {...stackProps}
        >
            <HStack 
                justifyContent={"end"}
                w={"100%"}
            >
                <AppIconButton
                    icon={<CloseIcon />}
                    iconColor="palette.esp"
                    onClick={() => {}}
                />
            </HStack>
            <VStack
                px={"16px"}
                flex={1}
                overflowY={"auto"}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                        bg: 'palette.flask',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        bg: 'palette.esp',
                        borderRadius: '4px',
                    },
                }}
            >
                {course.modules.map((module, idx) => 
                    <ModuleOverviewItem
                        key={idx}
                        moduleOrder={idx + 1}
                        module={module}
                    />
                )}
            </VStack>
        </VStack>
    )
}

export default CourseOverviewPane
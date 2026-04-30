import { Box, HStack } from "@chakra-ui/react"
import { Course } from "../../../../../models/course"
import CourseContentFrame from "./components/course-content/CourseContentFrame"
import CourseOverviewPane from "./components/course-overview/CourseOverviewPane"
import { useState } from "react";
import { ThreeStacksMenuIcon } from "../../../../components/appIcons/ThreeStacksMenuIcon";
import AppIconButton from "../../../../components/AppIconButton";


interface Props {
    course: Course,
    goToHomeScreen: () => void;
}

const OngoingCourseFrame = ({ 
    course,
    goToHomeScreen,
}: Props) => {
    const [isOverviewPaneVis, setOverviewPaneVis] = useState(true);

    return (
        <HStack
            overflow={"hidden"}
            w={"100%"}
            h={"100%"}
            px={"32px"}
            pb={"32px"}
            gap={"32px"}
            justifyContent={"center"}
        >  
            {isOverviewPaneVis &&            
                <CourseOverviewPane
                    course={course}
                    display={{
                        base: "none",
                        md: "flex"
                    }}
                    onClosePaneClick={() => {setOverviewPaneVis(false)}}
                />
            }
            {!isOverviewPaneVis &&
                <Box
                    position={"fixed"}
                    zIndex={100}
                    w={"100vw"}
                    h={"100vh"}
                    top={20}
                    left={6}
                    display={{
                        base: "none",
                        md: "auto"
                    }}
                >
                    <AppIconButton
                        icon={<ThreeStacksMenuIcon />}
                        iconColor="palette.arduino"
                        onClick={() => setOverviewPaneVis(true)}
                        
                    />
                </Box>
            }
            <CourseContentFrame
                course={course}
                goToHomeScreen={goToHomeScreen}
            />
        </HStack>
    )
}

export default OngoingCourseFrame
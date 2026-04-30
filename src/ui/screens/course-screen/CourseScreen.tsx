import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, VStack } from "@chakra-ui/react"
import AppHeader from "../../components/AppHeader"
import useAppStore from "../../../state-management/appStore"
import CourseList from "./frames/CourseListFrame/CourseList";
import OngoingCourseFrame from "./frames/OngoingCourseFrame/OngoingCourseFrame";
import McqAssessmentFrame from "./frames/McqAssessment/McqAssessmentFrame";
import { dummyMcqAssessment } from "../../../models/mcqAssessment";
import { useEffect, useState } from "react";
import CourseOverviewPane from "./frames/OngoingCourseFrame/components/course-overview/CourseOverviewPane";

interface Props {
    goToHomeScreen: () => void;
}

const CourseScreen = ({
    goToHomeScreen
}: Props) => {
    const [isOverviewMenuVis, setOverviewMenuVis] = useState(false);

    const selectedCourse = useAppStore(s => s.selectedCourse);
    const getCourses = useAppStore(s => s.getCourses);
    const courses = getCourses();

    const onMenuClick = () => {
        if (selectedCourse == null) return;

        setOverviewMenuVis(true);
    }

    // on small screen, if overview menu is open
    // and you drag window into a large screen
    // this use effect ensures the overview menu disappears on screen resize
    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth >= 768) {
                setOverviewMenuVis(false);
            }
        }

        window.addEventListener(
            'resize',
            handleWindowResize,
        );

        return () => window.removeEventListener(
            'resize',
            handleWindowResize,
        );
    }, [])


    return (
        <VStack
            gap={0}
            w={"100%"}
            h={"100%"}
        >
            <AppHeader
                onMenuClick={onMenuClick}
            />
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
            {selectedCourse &&
                <Drawer
                    isOpen={isOverviewMenuVis}
                    onClose={() => setOverviewMenuVis(false)}
                    placement="left"
                >
                    <DrawerOverlay />
                    <DrawerContent
                        bg={"palette.sensor"}
                        pb={"48px"}
                    >
                        <CourseOverviewPane
                            course={selectedCourse}
                            maxW={"100%"}
                            onClosePaneClick={
                                () => setOverviewMenuVis(false)
                            }
                        />
                    </DrawerContent>
                </Drawer>
            }
        </VStack>
    )
}

export default CourseScreen
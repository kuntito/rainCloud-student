import { VStack } from "@chakra-ui/react"
import ModuleHeader from "../ModuleHeader"
import { Course } from "../../../../../models/course"
import { LectureSection } from "../../../../../models/lectureSection"
import TextSectionItem from "../text-section/TextSectionItem"
import VideoSectionItem from "../video-section/VideoSectionItem"
import { Lecture } from "../../../../../models/lecture"
import AppIconButton from "../../../../components/AppIconButton"
import AppButton from "../../../../components/AppButton"

interface Props {
    course: Course
}

const OngoingCourseFrame = ({ course }: Props) => {
    const currentModule = course.modules[
        course.currentModuleIndex
    ];

    const currentLecture: Lecture = currentModule.lectures[
        currentModule.currentLectureIndex
    ];

    return (
        <VStack
            w={"100%"}
            h={"100%"}
            align={"flex-start"}
            paddingX={"16px"}
            gap={"24px"}
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
            <ModuleHeader
                moduleTitle={currentModule.moduleTitle}
            />
            <VStack
                gap={"48px"}
                pb={"64px"}
            >
                {currentLecture.lectureSections.map((item) =>
                    renderLectureSection(item)
                )}
            </VStack>
        </VStack>
    )
}

export default OngoingCourseFrame



const renderLectureSection = (
    lectureSection: LectureSection
) => {
    switch (lectureSection.type) {
        case 'text':
            return <TextSectionItem textSection={lectureSection} />
        case 'video':
            return <VideoSectionItem video={lectureSection} />
    }
}
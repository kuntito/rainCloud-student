import { Box } from "@chakra-ui/react"
import CourseScreen from "./ui/screens/course-screen/CourseScreen"
import McqAssessmentFrame from "./ui/screens/course-screen/frames/McqAssessment/McqAssessmentFrame"
import { dummyMcqAssessment } from "./models/mcqAssessment"

function App() {
  return (
    <Box
        w={"100vw"}
        h={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        overflow={"hidden"}
    >
        <CourseScreen />
    </Box>
  )
}

export default App

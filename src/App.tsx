import { Box } from "@chakra-ui/react"
import { useState } from "react"
import useAppStore from "./state-management/appStore"
import CourseScreen from "./ui/screens/course-screen/CourseScreen"
import HomeScreen from "./ui/screens/HomeScreen"

// TODO replace this with proper navigation
enum AppScreens {
    Home,
    Course
}

function App() {
    const [curScreen, setCurScreen] = useState<AppScreens>(AppScreens.Home)
    const resetCourseProgress = useAppStore(s => s.resetCourseProgress);

    const goToCourseScreen = () => {
        setCurScreen(
            AppScreens.Course
        )
    }

    const resetMvp = () => {
        setCurScreen(
            AppScreens.Home
        );
        resetCourseProgress();
    }

    return (
        <Box
            w={"100vw"}
            h={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            overflow={"hidden"}
        >
            {curScreen == AppScreens.Home && <HomeScreen onSignInClick={goToCourseScreen} />}
            {curScreen == AppScreens.Course && <CourseScreen goToHomeScreen={resetMvp} />}
        </Box>
    )
}

export default App

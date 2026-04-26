import { Box } from "@chakra-ui/react"
import HomeScreen from "./ui/screens/HomeScreen"

function App() {

  return (
    <Box
        w={"100vw"}
        h={"100vh"}
        display={"flex"}
        flexDirection={"column"}
    >
        <HomeScreen />
    </Box>
  )
}

export default App

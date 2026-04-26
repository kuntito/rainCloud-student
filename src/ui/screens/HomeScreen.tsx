import { Box, VStack, Image } from "@chakra-ui/react"
import SignInForm from "../components/SignInForm"

const HomeScreen = () => {
    return (
        <VStack
            w={"100vw"}
            h={"100vh"}
            justifyContent={"center"}
        >
            <VStack
                gap={"24px"}
            >
                <Image 
                    src="rain_logo.png"
                    width={"80px"}
                    height={"80px"}
                    border={"1px solid palette.arduino"}
                />
                <SignInForm />
            </VStack>  
        </VStack>
    )
}

export default HomeScreen;
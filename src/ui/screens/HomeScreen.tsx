import { Box, VStack, Image, Flex } from "@chakra-ui/react"
import SignInForm from "../components/SignInForm"

const HomeScreen = () => {
    return (
        <Flex
            w={"100vw"}
            h={"100vh"}
            flexDirection={{
                base: "column",
                md: "row",
            }}
            justifyContent={"center"}
        >
            <VStack
                w={{
                    base: "100%", 
                }}
                justifyContent={"center"}
                >
                <Image 
                    src="rain_logo.png"
                    boxSize={{
                        base: "80px",
                        md: "256px"
                    }}
                    border={"1px solid palette.arduino"}
                    />
            </VStack>
            <VStack
                w={{
                    base: "100%", 
                }}
                justifyContent={"center"}
                pt={"24px"}
            >
                <SignInForm />
            </VStack>
        </Flex>
    )
}

export default HomeScreen;
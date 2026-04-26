import { VStack } from "@chakra-ui/react"
import AppInputWithLabel from "./AppInputWithLabel"
import AppButton from "./AppButton"

const SignInForm = () => {
    return (
        <VStack
            w={"282px"}
            gap={"40px"}
        >
            <VStack
                w={"100%"}
                gap={"16px"}
            >
                <AppInputWithLabel label="your id" />
                <AppInputWithLabel label="password" type="password"/>
            </VStack>
            <AppButton>
                sign in
            </AppButton>
        </VStack>
    )
}

export default SignInForm
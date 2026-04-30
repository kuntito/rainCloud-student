import { VStack } from "@chakra-ui/react"
import AppInputWithLabel from "./AppInputWithLabel"
import AppButton from "./AppButton"

interface Props {
    onSignInClick: () => void;
}

const SignInForm = ({
    onSignInClick
}: Props) => {
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
            <AppButton
                onClick={onSignInClick}
            >
                sign in
            </AppButton>
        </VStack>
    )
}

export default SignInForm
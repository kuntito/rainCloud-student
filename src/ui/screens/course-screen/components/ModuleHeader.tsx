import { HStack, Text } from "@chakra-ui/react"

interface Props {
    moduleTitle: string;
}

const ModuleHeader = ({ moduleTitle }: Props) => {
    return (
        <HStack
            w={"100%"}
            justifyContent={"center"}
        >
            <Text
                textStyle={"blaze"}
            >
                {moduleTitle}
            </Text>
        </HStack>
    )
}

export default ModuleHeader
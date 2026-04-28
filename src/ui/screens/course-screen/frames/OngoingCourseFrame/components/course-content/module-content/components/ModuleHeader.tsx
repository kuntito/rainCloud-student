import { HStack, Text } from "@chakra-ui/react";

interface Props {
    moduleTitle: string;
}

const ModuleHeader = ({ moduleTitle }: Props) => {
    return (
        <HStack
            justifyContent={"center"}
            w={"100%"}
        >
            <Text
                textStyle={"blaze"}
                textAlign={"center"}
            >
                {moduleTitle}
            </Text>
        </HStack>
    )
}

export default ModuleHeader
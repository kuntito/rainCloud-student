import { Box, Center, HStack, Text } from "@chakra-ui/react";
import { TextSection } from "../../../../../../../../../models/textSection";


interface Props {
    textSection: TextSection;
}

const TextLsOverviewItem = ({ textSection }: Props) => {
    return (
        <HStack>
            <Center
                boxSize={"16px"}
            >
                •
            </Center>
            <Text
                textStyle={"hush"}
            >
                {textSection.sectionTitle}
            </Text>
        </HStack>
    )
}



export default TextLsOverviewItem
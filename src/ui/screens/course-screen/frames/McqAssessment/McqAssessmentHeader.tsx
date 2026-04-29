import { HStack, Text } from "@chakra-ui/react";

interface Props {
    assessmentTitle: string;
}

const McqAssessmentHeader = ({ assessmentTitle }: Props) => {
    return (
        <HStack
            justifyContent={"center"}
        >
            <Text
                textStyle={"blaze"}
                textAlign={"center"}
            >
                {assessmentTitle}
            </Text>
        </HStack>
    )
}

export default McqAssessmentHeader
import { HStack, Text, VStack, Image } from "@chakra-ui/react";
import { McqQuestion } from "../../../../../models/mcqQuestion";
import McqOptionList from "./McqOptionList";

interface Props {
    questionOrder: number;
    mcqQuestion: McqQuestion;
}

const McqQuestionItem = ({
    questionOrder, 
    mcqQuestion 
}: Props) => {
    return (
        <VStack
            w={"100%"}
            align={"flex-start"}
            gap={"16px"}
            >
            <HStack
                gap={"16px"}
                align={"start"}
                pe={{
                    base: "16px"
                }}
            >
                <Text>{questionOrder}.</Text>
                <Text>{mcqQuestion.questionText}</Text>
            </HStack>
            {mcqQuestion.questionImageUrl && <Image src="/image_placeholder.png" />}
            <McqOptionList options={mcqQuestion.options} />
        </VStack>
    )
}

export default McqQuestionItem
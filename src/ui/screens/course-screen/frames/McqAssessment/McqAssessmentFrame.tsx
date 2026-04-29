import { Box, Flex, VStack } from "@chakra-ui/react"
import McqAssessmentHeader from "./McqAssessmentHeader"
import { McqAssessment } from "../../../../../models/mcqAssessment"
import McqQuestionList from "./McqQuestionList";
import AppButton from "../../../../components/AppButton";

interface Props {
    mcqAssessment: McqAssessment;
}

const McqAssessmentFrame = ({ mcqAssessment }: Props) => {
    return (
        <VStack
            flex={1}
            w={"100%"}
            px={"16px"}
            overflow={"hidden"}
        >
            <McqAssessmentHeader
                assessmentTitle={mcqAssessment.title}
            />
            <McqQuestionList
                mcqQuestions={mcqAssessment.questions}
            />
        </VStack>
    )
}

export default McqAssessmentFrame
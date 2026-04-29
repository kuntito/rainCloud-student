import { StackProps, VStack } from "@chakra-ui/react";
import { McqQuestion } from "../../../../../models/mcqQuestion";
import McqQuestionItem from "./McqQuestionItem";

interface Props extends StackProps {
    mcqQuestions: McqQuestion[];
}

const McqQuestionList = ({
    mcqQuestions,
    ...stackProps
}: Props) => {
    return (
        <VStack
            flex={1}
            w={"100%"}
            overflowY={"auto"}
            sx={{
                '&::-webkit-scrollbar': {
                    width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                    bg: 'palette.flask',
                },
                '&::-webkit-scrollbar-thumb': {
                    bg: 'palette.esp',
                    borderRadius: '4px',
                },
            }}
            {...stackProps}
        >
            <VStack
                maxW={{
                    md: "628px"
                }}
                gap={"48px"}
                align={"flex-start"}
            >
                {mcqQuestions.map((q, idx) => 
                    <McqQuestionItem 
                        key={idx}
                        questionOrder={idx + 1}
                        mcqQuestion={q}
                    />
                )}
            </VStack>
        </VStack>
    )
}

export default McqQuestionList
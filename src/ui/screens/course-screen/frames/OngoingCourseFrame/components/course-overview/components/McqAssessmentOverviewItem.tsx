import { HStack, StackProps, Text } from "@chakra-ui/react";
import { McqAssessment } from "../../../../../../../../models/mcqAssessment"
import { AssessmentIcon } from "../../../../../../../components/appIcons/AssessmentIcon";

interface Props extends StackProps {
    mcq: McqAssessment;
}

// TODO extract the 16px icon size for indicators, AssessmentIcon, VideoIcon, and the bullet point
const McqAssessmentOverviewItem = ({
    mcq,
    ...stackProps
}: Props) => {
    return (
        <HStack
            w={"100%"}
            {...stackProps}
        >
            <AssessmentIcon
                boxSize={"16px"}
            />
            <Text
                textStyle={"hush"}
            >
                {mcq.title}
            </Text>
        </HStack>
    )
}

export default McqAssessmentOverviewItem
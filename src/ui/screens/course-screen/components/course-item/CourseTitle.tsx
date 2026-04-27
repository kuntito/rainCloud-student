import { Text } from "@chakra-ui/react";

interface Props {
    courseTitle: string;
}

const CourseTitle = ({ courseTitle }: Props) => {
    return (
        <Text
            textStyle={"orionSb"}
        >{courseTitle}
        </Text>
    )
}

export default CourseTitle
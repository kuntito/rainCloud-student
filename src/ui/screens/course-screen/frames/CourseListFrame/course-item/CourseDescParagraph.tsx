import { Text } from "@chakra-ui/react"

interface Props {
    paragraphText: string;
}

const CourseDescParagraph = (
    { paragraphText }: Props
) => {
    return (
        <Text
            textStyle={"onaregz"}
            color={"palette.esp"}
        >
            {paragraphText}
        </Text>
    )
}

export default CourseDescParagraph
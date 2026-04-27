import { Text } from "@chakra-ui/react";

interface Props {
    text: string;
}

const TextSectionParagraphItem = ({ text }: Props) => {
    return (
        <Text
            textStyle={"onaregz"}
            color={"palette.actuator"}
        >
            {text}
        </Text>
    )
}

export default TextSectionParagraphItem
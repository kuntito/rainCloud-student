import { Text, VStack } from "@chakra-ui/react"
import { TextSection } from "../../../../../../../../../../models/textSection"
import TextSectionParagraphItem from "./TextSectionParagraphItem"



interface Props {
    textSection: TextSection
}

const TextSectionItem = ({ textSection }: Props) => {
    return (
        <VStack
            gap={"12px"}
            align={"flex-start"}
            >
            <Text>{textSection.sectionTitle}</Text>
            <VStack
                gap={"6px"}
                align={"flex-start"}
            >
                {textSection.paragraphs.map((item, idx) => 
                    <TextSectionParagraphItem
                        key={idx}
                        text={item}
                    />
                )}
            </VStack>
        </VStack>
    )
}

export default TextSectionItem
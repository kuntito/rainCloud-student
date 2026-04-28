import { VStack, Text } from "@chakra-ui/react"
import { Module } from "../../../../../../../../models/module";


interface Props {
    moduleOrder: number;
    module: Module;
}

const HeaderModuleOverviewItem = ({
    moduleOrder,
    module
}: Props) => {
    return (
        <VStack
            align={"flex-start"}
            gap={0}
        >
            <Text
                textStyle={"orion"}
                color={"palette.esp"}
            >
                Module {moduleOrder}
            </Text>
            <Text
                textStyle={"orionSb"}
            >
                {module.moduleTitle}
            </Text>
        </VStack>
    )
}

export default HeaderModuleOverviewItem
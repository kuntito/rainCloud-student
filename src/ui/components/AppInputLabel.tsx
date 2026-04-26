import { Text, TextProps } from "@chakra-ui/react"

interface Props extends TextProps {
    label: string;
}

const AppInputLabel = ({ label, ...rest }: Props) => {
    return (
        <Text
            textStyle={"onaregz"}
            {...rest}
        >
            {label}
        </Text>
    )
}

export default AppInputLabel
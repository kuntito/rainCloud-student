import { VStack, InputProps } from "@chakra-ui/react"
import AppInputLabel from "./AppInputLabel"
import AppInput from "./AppInput";

interface Props extends InputProps {
    label: string;
}

const AppInputWithLabel = ({ label, ...inputProps }: Props) => {
    return (
        <VStack
            gap={"4px"}
            w={"100%"}
            alignItems={"start"}
        >
            <AppInputLabel 
                label={label}
                
            />
            <AppInput 
                {...inputProps} 
                
            />
        </VStack>
    )
}

export default AppInputWithLabel
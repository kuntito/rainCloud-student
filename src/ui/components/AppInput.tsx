import { Box, Input, InputProps } from "@chakra-ui/react";
import { useState } from "react"

interface Props extends InputProps {

}

const AppInput = ({ ...rest }: Props) => {
    const [text, setText] = useState('');

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);
    }

    return (
        <Box
            bg={"palette.esp"}
            color={"palette.sensor"}
            borderRadius={"32px"}
            h={"40px"}
            px={"16px"}
            w={"100%"}
            alignContent={"center"}
            transition={"background 0.2s ease"}
            _focusWithin={{
                bg: "palette.arduino"
            }}
        >
            <Input 
                value={text}
                onChange={handleTextChange}
                variant={"unstyled"}
                {...rest}
            />
        </Box>
    )
}

export default AppInput
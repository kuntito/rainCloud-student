import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
    
}

const AppButton = ({ ...buttonProps }: Props) => {
    return (
        <Button 
            bg={"palette.pandas"}
            color={"palette.arduino"}
            borderRadius={100} 
            _hover={{
                bg: "palette.esp",
            }}
            _active={{
                opacity: 0.5,
            }}
            {...buttonProps} 
        />
    );
};

export default AppButton;

import { Button, ButtonProps } from "@chakra-ui/react";

const AppButton = (props: ButtonProps) => {
    return (
        <Button 
            bg={"palette.pandas"}
            color={"palette.arduino"}
            borderRadius={100} 
            {...props} 
        />
    );
};

export default AppButton;

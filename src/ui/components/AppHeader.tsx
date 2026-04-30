import { Box, HStack, Image } from "@chakra-ui/react"
import AppIconButton from "./AppIconButton"
import { ThreeStacksMenuIcon } from "./appIcons/ThreeStacksMenuIcon"
import { PersonIcon } from "./appIcons/PersonIcon"

interface Props {
    onMenuClick: () => void;
}

const AppHeader = ({
    onMenuClick
}: Props) => {
    const onPersonProfileClick = () => {}

    return (
        <HStack
            h={"80px"}
            w={"100%"}
            justifyContent={"space-between"}
            px={{
                base: "16px",
                md: "32px"
            }}
        >
            <Box
                display={{
                    md: "none"
                }}
            >
                <AppIconButton
                    icon={<ThreeStacksMenuIcon />}
                    iconColor="palette.arduino"
                    onClick={onMenuClick}
                />
            </Box>
            <Image
                src="rain_logo.png"
                boxSize={"40px"}
            />
            <AppIconButton 
                icon={<PersonIcon />}
                iconColor="palette.arduino"
                onClick={onPersonProfileClick}
            />
        </HStack>
    )
}

export default AppHeader
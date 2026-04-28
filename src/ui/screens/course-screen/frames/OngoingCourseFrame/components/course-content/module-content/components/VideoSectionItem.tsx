import { VStack, Text, Box } from "@chakra-ui/react"
import { VideoSection } from "../../../../../../../../../models/videoSection";


interface Props {
    videoSection: VideoSection;
}

const VideoSectionItem = ({ videoSection }: Props) => {
    return (
        <VStack
            align={"flex-start"}
            gap={"16px"}
            w={"100%"}
        >
            <Text
                textStyle={"orionSb"}
            >
                {videoSection.videoTitle}
            </Text>
            <Box
                borderRadius={"16px"}
                overflow={"hidden"}
                w={"100%"}
            >
                <video
                    src={videoSection.videoUrl}
                    controls
                    width={"100%"}
                    height={"100%"}
                />
            </Box>
        </VStack>
    )
}

export default VideoSectionItem
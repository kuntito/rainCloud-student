import { VStack, Text, Box } from "@chakra-ui/react"
import { VideoSection } from "../../../../../models/videoSection"

interface Props {
    video: VideoSection;
}

const VideoSectionItem = ({ video }: Props) => {
    return (
        <VStack
            align={"flex-start"}
            gap={"16px"}
        >
            <Text
                textStyle={"orionSb"}
            >
                {video.videoTitle}
            </Text>
            <Box
                borderRadius={"16px"}
                overflow={"hidden"}
                w={"100%"}
            >
                <video
                    src={video.videoUrl}
                    controls
                    width={"100%"}
                    height={"100%"}
                />
            </Box>
        </VStack>
    )
}

export default VideoSectionItem
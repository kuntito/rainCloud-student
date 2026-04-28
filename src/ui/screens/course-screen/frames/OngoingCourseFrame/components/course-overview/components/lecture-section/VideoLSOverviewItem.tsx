import { HStack, Text } from "@chakra-ui/react";
import { VideoSection } from "../../../../../../../../../models/videoSection";
import { VideoIcon } from "../../../../../../../../components/appIcons/VideoIcon";



interface Props {
    videoSection: VideoSection;
}

const VideoLSOverviewItem = ({ videoSection }: Props) => {
    return (
        <HStack>
            <VideoIcon
                color={"palette.esp"}
                boxSize={"16px"}
            />
            <Text
                textStyle="hush"
            >
                {videoSection.videoTitle}
            </Text>
        </HStack>
    )
}

export default VideoLSOverviewItem
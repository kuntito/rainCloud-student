import { createIcon } from "@chakra-ui/react";

export const VideoIcon = createIcon({
    displayName: "VideoIcon",
    viewBox: "0 0 20 14",
    defaultProps: {
        color: "#8D8D8D",
    },
    path: [
        <path
            key="screen"
            d="M10.75 0.75H4.25C2.317 0.75 0.75 2.317 0.75 4.25V9.25C0.75 11.183 2.317 12.75 4.25 12.75H10.75C12.683 12.75 14.25 11.183 14.25 9.25V4.25C14.25 2.317 12.683 0.75 10.75 0.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />,
        <path
            key="camera"
            d="M14.25 4.4902L17.804 2.7202C17.9565 2.64423 18.1258 2.60846 18.296 2.61629C18.4661 2.62412 18.6315 2.67528 18.7763 2.76493C18.9211 2.85458 19.0407 2.97974 19.1236 3.12854C19.2065 3.27735 19.25 3.44486 19.25 3.6152V9.8832C19.2501 10.0537 19.2066 10.2213 19.1236 10.3703C19.0407 10.5192 18.921 10.6445 18.776 10.7341C18.631 10.8238 18.4655 10.8749 18.2952 10.8826C18.1249 10.8904 17.9555 10.8544 17.803 10.7782L14.25 9.0052V4.4902Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />,
    ],
});

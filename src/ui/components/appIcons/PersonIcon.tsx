import { createIcon } from "@chakra-ui/react";

export const PersonIcon = createIcon({
    displayName: "PersonIcon",
    viewBox: "0 0 24 24",
    defaultProps: {
        color: "white",
    },
    path: [
        <path
            key="head"
            d="M16.125 6.75C15.9413 9.22828 14.0625 11.25 12 11.25C9.93754 11.25 8.05551 9.22875 7.87504 6.75C7.68754 4.17188 9.51566 2.25 12 2.25C14.4844 2.25 16.3125 4.21875 16.125 6.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />,
        <path
            key="body"
            d="M11.9999 14.25C7.92181 14.25 3.78274 16.5 3.01681 20.7469C2.92446 21.2588 3.21415 21.75 3.74993 21.75H20.2499C20.7862 21.75 21.0759 21.2588 20.9835 20.7469C20.2171 16.5 16.0781 14.25 11.9999 14.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            fill="none"
        />,
    ],
});

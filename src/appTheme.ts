import { extendTheme } from "@chakra-ui/react"

const colors = {
    palette: {
        arduino: "#FFFFFF",
        esp: "#8D8D8D",
        pandas: "#3D3D3D",
        regression: "#111111",
        sensor: "#181818",
        flask: "#050505",
        rain: "#9E7741",
        actuator: "#CFCFCF",
        meta: "#202020",
    }
}

// ****
const textStyles = {
    orion: {
        fontSize: "16px",
        fontWeight: "normal",
    },
    hush: {
        fontSize: "12px",
        fontWeight: "normal",
    },
    blaze: {
        fontSize: "24px",
        fontWeight: "normal",
    },
    modu: {
        fontSize: "14px",
        fontWeight: "normal",
    },
    nines: {
        fontSize: "18px",
        fontWeight: "normal",
    },
    orionSb: {
        fontSize: "16px",
        fontWeight: "semibold",
    },
    tiny: {
        fontSize: "8px",
        fontWeight: "normal",
    }
}

const appTheme = extendTheme({
    colors,
    textStyles,
    styles: {
        global: {
            body: {
                background: "palette.sensor",
                color: "palette.arduino",
            }
        }
    },
})

export default appTheme;
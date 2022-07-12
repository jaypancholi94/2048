// UI imports
import { Box, Typography } from "@mui/material";

const Tile = (props) => {
    const { value } = props;
    const obj = {
        0: {
            bgcolor: "#f0f3f5",
        },
        2: {
            bgcolor: "#b4bfcb",
        },
        4: {
            bgcolor: "#a5b2c0",
        },
        8: {
            bgcolor: "#96a5b6",
        },
        16: {
            bgcolor: "#8798ab",
        },
        32: {
            bgcolor: "#788ca1",
        },
        64: {
            bgcolor: "#697f96",
        },
        128: {
            bgcolor: "#5e7287",
        },
        256: {
            bgcolor: "#546578",
        },
        512: {
            bgcolor: "#495969",
        },
        1024: {
            bgcolor: "#3f4c5a",
        },
        2048: {
            bgcolor: "#343f4b",
        },
        4096: {
            bgcolor: "#",
        },
        8192: {
            bgcolor: "#",
        },
        16384: {
            bgcolor: "#",
        },
    };
    return (
        <Box
            sx={{
                height: 80,
                width: 80,
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: obj[value].bgcolor,
                // border: "solid 1px ",
            }}
            borderRadius={2}
        >
            <Typography sx={{ fontSize: 40 }}>
                {value !== 0 && value}
            </Typography>
        </Box>
    );
};

export default Tile;

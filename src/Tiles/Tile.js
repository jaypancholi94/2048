// UI imports
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Tile = (props) => {
    const { value } = props;
    const { palette } = useTheme(useTheme);

    return (
        <Box
            sx={{
                height: 80,
                width: 80,
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: palette?.tiles?.[value]?.bgcolor,
                color: palette?.tiles?.[value]?.color,
            }}
            borderRadius={2}
        >
            <Typography sx={{ fontSize: palette?.tiles?.[value]?.fontSize }}>
                {value !== 0 && value}
            </Typography>
        </Box>
    );
};

export default Tile;

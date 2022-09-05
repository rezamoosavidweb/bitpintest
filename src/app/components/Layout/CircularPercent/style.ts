import { styled } from "@mui/material";

export const CircularPercentContainer = styled("div")(({ theme }) => ({
    width: "95px",
    justifyContent: "space-around",
    position: "absolute",
    left: -15,
    top: -16,

    "& .circular-chart2": {
        display: "block",
        maxWidth: "100%",
        maxHeight: "250px",
    },
    "& .circle-bg": {
        fill: "none",
        stroke: "#fff",
        strokeWidth: 1.5,
    },
    "& .circle": {
        fill: "none",
        strokeWidth: 1.3,
        strokeLinecap: "round",
        animationName: "percentAnimation",
        animationDuration: "1000ms",
        animationIterationCount: "1",
        animationTimingFunction: "ease-out",
        animationFillMode: "forwards",
    },
    "& .percentage": {
        fill: "#666",
        fontSize: "0.5em",
        textAnchor: "middle",
        fontFamily: "iranSans",
        fontWeight: "bold",
    },
    "& .circular-chart2.primary .circle": {
        stroke: theme.palette.primary.main,
    },

    "@keyframes percentAnimation": {
        "0%": {
            strokeDasharray: "0 100px",
        },
    },
}));

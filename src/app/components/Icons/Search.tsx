import { Grid } from "@mui/material";
import React from "react";

export default function Search({ color, ...rest }) {
    return (
        <Grid item {...rest}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.5 21.1095C16.7467 21.1095 21 16.8529 21 11.6021C21 6.35133 16.7467 2.09473 11.5 2.09473C6.25329 2.09473 2 6.35133 2 11.6021C2 16.8529 6.25329 21.1095 11.5 21.1095Z"
                    stroke={color}
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M22 22.1104L20 20.1089"
                    stroke={color}
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Grid>
    );
}

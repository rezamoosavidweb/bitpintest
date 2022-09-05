import { Grid, styled } from "@mui/material";
export const CustomTabItem = styled(Grid)<{ status: "active" | "unActive" }>(
    ({ theme, status }) => ({
        backgroundColor: theme.palette.common.back,
        border: `1px solid ${theme.palette.primary.main}`,
        borderBottom: "none",
        borderRadius: "8px 8px 0 0",
        minWidth: 100,
        textAlign: "center",
        padding: "0px 10px",
        cursor: status === "unActive" ? "pointer" : "unset",
        height: status === "active" ? "37px" : "30px",
        transition: "height 200ms ease-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }),
);

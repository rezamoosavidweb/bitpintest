import { Grid, Step, StepConnector, styled, Typography } from "@mui/material";
import { stepConnectorClasses } from "@mui/material/StepConnector";

export const CustomStep = styled(Grid)(({ theme }) => ({
    width: "fit-content",
}));
export const CustomStepper = styled(Grid)(({ theme }) => ({}));
export const CustomStepLabel = styled(Typography)<{ activecolor?: string }>(({ theme, activecolor }) => ({
    color: activecolor === "true" ? theme.palette.primary.main : "#9096A5",
}));
export const DashSeparator = styled("div")<{ activecolor?: string }>(({ theme, activecolor }) => ({
    borderColor: activecolor === "true" ? theme.palette.primary.main : "#9096A5",
    borderBottom: "1px dashed",
    display: "flex",
    flex: 1,
    width: "100%",
    height: "1px",
    margin: "0 13px",
}));

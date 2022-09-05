import { CustomStep, CustomStepLabel, CustomStepper, DashSeparator } from "./style";
import StepLabel from "@mui/material/StepLabel";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import { StepIconProps } from "@mui/material/StepIcon";
import React from "react";
import { Grid, stepClasses } from "@mui/material";
import { useTheme } from "@mui/material";

type Props = {
    steps: Array<{ id: number; icon: React.FC<string>; label: string }>;
    activeStep: number;
    width?: string;
    maxWidth?: string;
};

export function MuiStepper({ steps, activeStep, width, maxWidth }: Props) {
    const theme = useTheme();
    return (
        <Grid container justifyContent="center">
            <CustomStepper
                container
                justifyContent="space-between"
                alignItems="center"
                maxWidth={maxWidth}
                width={width}
            >
                {steps.map((item, index) => (
                    <CustomStep
                        container
                        key={item.id}
                        alignItems="center"
                        flex={index + 1 !== steps.length ? `1 !important` : "unset"}
                    >
                        <>
                            {item.icon(activeStep === index ? theme.palette.primary.main : "#9096A5")}
                            <CustomStepLabel
                                variant="caption1"
                                marginLeft="10px"
                                activecolor={activeStep === index ? "true" : ""}
                            >
                                {item.label}
                            </CustomStepLabel>
                            {index + 1 !== steps.length && <DashSeparator />}
                        </>
                    </CustomStep>
                ))}
            </CustomStepper>
        </Grid>
    );
}

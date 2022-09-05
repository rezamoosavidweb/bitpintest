import React, { memo } from "react";
import Radio from "@mui/material/Radio";

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

interface Props extends InputProps {
    id: string;
    label: string;
    className?: string;
    isSelected?: boolean;
}

export const RadioButton = memo(
    ({ id, label, className, isSelected, ...restOf }: Props) => {
        return <Radio />;
    },
);

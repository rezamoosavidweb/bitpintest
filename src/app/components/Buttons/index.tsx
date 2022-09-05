import { Button, styled } from "@mui/material";

export const LoadingMuiButton = ({ children, loading, ...res }) => {
    return (
        <Button {...res} >
            <>{children}</>
        </Button>
    );
};

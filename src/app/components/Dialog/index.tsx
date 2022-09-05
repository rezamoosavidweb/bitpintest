import { CloseRounded } from '@mui/icons-material';
import { Dialog, Grid, IconButton, Typography, Zoom } from '@mui/material';
import { rootActions } from 'app/slice';
import { selectDialogs } from 'app/slice/selectors';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Transition = React.forwardRef(function Transition(props: any, ref: any) {
    return <Zoom ref={ref} {...props} />;
});

const MuiDialogComponent = dialog => {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(rootActions.closeAndRemoveDialog(dialog?.id));
    };
    const Body = dialog?.Body;
    return (
        <Dialog
            open={dialog?.open}
            TransitionComponent={Transition}
            maxWidth="xl"
            onClose={onClose}
            style={{ zIndex: 3000 }}
        >
            <Grid container justifyContent="space-between" alignItems="center" padding={1}>
                <Typography>{dialog?.title}</Typography>
                <IconButton onClick={onClose}>
                    <CloseRounded />
                </IconButton>
            </Grid>
            <Grid container padding={1}>
                <Body />
            </Grid>
        </Dialog>
    );
};
export function MuiDialogs() {
    const dialogs = useSelector(selectDialogs);
    return (
        <>
            {dialogs.map((dialog, index) => (
                <MuiDialogComponent key={index} {...dialog} />
            ))}
        </>
    );
}

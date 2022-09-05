import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

const Input = styled('input')({
    display: 'none',
});

export default function UploadFile({ uploadButtonText, name, error, value, onChange }) {
    return (
        <Stack direction="row" alignItems="center">
            <Grid
                container
                flex={1}
                height="100%"
                border="1px solid #e7e7e7"
                borderRadius="5px 0 0 5px"
                paddingRight="5px"
                alignItems="center"
                sx={{ backgroundColor: '#f7f7f7', whiteSpace: 'nowrap', overflow: 'hidden' }}
            >
                <div
                    style={{
                        direction: 'ltr',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        // width: "40%",
                    }}
                >
                    {value}
                </div>
            </Grid>
            <label htmlFor="contained-button-file">
                <Input
                    accept="image/*"
                    name={name}
                    value={value}
                    onChange={onChange}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <Button
                    variant="contained"
                    component="span"
                    color="like"
                    sx={{ borderRadius: '0 5px 5px 0', boxShadow: 'none', height: 30 }}
                >
                    {uploadButtonText}
                </Button>
            </label>
        </Stack>
    );
}

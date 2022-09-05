import { InputLabel, Select, styled, TextField, Typography } from '@mui/material';
import React from 'react';

export const CustomTextField = styled(TextField)<{ labelstyle?: React.CSSProperties }>(
    ({ theme, labelstyle }) => ({
        borderRadius: 15,

        '& fieldset': {
            borderColor: `${theme.palette.common.border} !important`,
            borderRadius: 15,
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important',
        },
        '& .MuiOutlinedInput-root ': {
            height: '45px !important',
        },
        '& label': labelstyle,
        '& .MuiFormLabel-asterisk': {
            color: '#9C0101 !important',
        },
        '& input': {
            borderRadius: '15px !important',
        },
        '& .MuiInputLabel-root': {
            top: '-6px !important',
        },
        '& .MuiInputLabel-root.MuiFormLabel-filled': {
            top: '1px !important',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            top: '1px !important',
        },
    }),
);
export const SearchBoxInput = styled(TextField)(({ theme }) => ({
    borderRadius: 0,
    width: '100%',
    maxWidth: '640px',
    '& fieldset': {
        borderRadius: 0,

        border: 'none !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important',
    },
    '& label': {
        color: '#000000 !important',
    },
    '& .MuiFormLabel-asterisk': {
        color: '#9C0101 !important',
    },
    '& input': {
        borderRadius: '0px !important',
        color: '#00000086 !important',
        backgroundColor: `${theme.palette.common.back} !important`,
        fontWeight: 'bold !important',
        paddingLeft: '48px !important',
    },
    '& input::placeholder': {
        color: '#757575 !important',
        fontWeight: 'bold !important',
    },
}));
export const FilterSearchBoxInput = styled(TextField)(({ theme }) => ({
    borderRadius: 0,
    width: '100%',
    maxWidth: '640px',
    '& fieldset': {
        borderRadius: 5,
        border: '1px solid !important',
        borderColor: `${theme.palette.common.border} !important`,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important',
    },
    '& label': {
        color: '#000000 !important',
    },
    '& .MuiOutlinedInput-root ': {
        height: '50px !important',
    },
    '& .MuiFormLabel-asterisk': {
        color: '#9C0101 !important',
    },
    '& input': {
        borderRadius: '5px !important',
        color: '#00000086 !important',
        backgroundColor: `#fff !important`,
        fontWeight: 'bold !important',
        paddingLeft: '49px !important',
    },
    '& input::placeholder': {
        color: '#979797 !important',
        fontWeight: 'bold !important',
    },
}));
export const PhoneNumberInput = styled(TextField)(({ theme }) => ({
    borderRadius: 0,
    flex: 1,
    display: 'flex',
    '& fieldset': {
        borderRadius: '5px 0 0 5px !important',
        border: '1px solid !important',
        borderColor: `${theme.palette.common.border} !important`,
        borderRight: 'none !important',
    },
    '& .MuiOutlinedInput-root ': {
        height: '48px !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important',
    },
    '& label': {
        color: '#000000 !important',
    },
    '& .MuiFormLabel-asterisk': {
        color: '#9C0101 !important',
    },
    '& input': {
        borderRadius: '0px !important',
        color: '#00000086 !important',
        backgroundColor: '#fff !important',
        fontWeight: 'bold !important',
    },
    '& input::placeholder': {
        color: '#757575 !important',
        fontWeight: 'bold !important',
        paddingLeft: '45px !important',
    },
    '& input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0,
    },
    '& input[type=number]': {
        MozAppearance: 'textfield',
    },
}));
export const CustomSelect = styled(Select)<{ labelstyle?: React.CSSProperties }>(
    ({ theme, labelstyle }) => ({
        borderRadius: 5,

        '& fieldset': {
            borderColor: `${theme.palette.common.border} !important`,
            borderRadius: 5,
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important',
        },

        '& .MuiSelect-select': {
            height: '30px !important',
            padding: '5px 0 0 14px !important',
            display: 'flex !important',
            alignItems: 'center !important',
            fontSize: '12px !important',
        },
        '& .MuiInputLabel-root': labelstyle,
        '& .MuiInputLabel-formControl': labelstyle,
        '& .MuiFormLabel-asterisk': {
            color: '#9C0101 !important',
        },
        '& input': {
            borderRadius: '15px !important',
        },
    }),
);
export const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
    '&.MuiInputLabel-root': {
        top: '-6px !important',
    },
    '&.MuiInputLabel-root.MuiFormLabel-filled': {
        top: '1px !important',
    },
    '&.MuiInputLabel-root.Mui-focused': {
        top: '1px !important',
    },
}));

//admin

export const CustomAdminInput = styled('input')<{ error?: string }>(({ theme, error }) => ({
    backgroundColor: '#f7f7f7',
    border: '1px solid',
    borderColor: error === 'error' ? theme.palette.error.main : '#e7e7e7',
    height: '30px',
    paddingLeft: '13px',
    borderRadius: 5,
    '&:focus': {
        outline: 'none',
    },
    '&::placeholder': {
        color: '#c4c4c4',
        fontFamily: 'iranSans !important',
        fontSize: 12,
    },
}));
export const CustomAdminTextArea = styled('textarea')<{ error?: string }>(({ theme, error }) => ({
    backgroundColor: '#f7f7f7',
    border: '1px solid',
    borderColor: error === 'error' ? theme.palette.error.main : '#e7e7e7',
    paddingLeft: '13px',
    borderRadius: 5,
    resize: 'none',
    '&:focus': {
        outline: 'none',
    },
    '&::placeholder': {
        color: '#c4c4c4',
        fontFamily: 'iranSans !important',
        fontSize: 12,
    },
}));
export const CustomAdminInputLabel = styled(Typography)(({ theme }) => ({
    marginBottom: 7,
    '& span': {
        color: theme.palette.error.main,
        marginLeft: 5,
    },
}));
export const CustomPlaceholder = styled(Typography)(({ theme }) => ({
    color: '#c4c4c4 !important',
}));
export const CustomAdminSelect = styled(Select)(({ theme }) => ({
    borderRadius: 5,
    backgroundColor: `#f7f7f7 !important`,
    '& fieldset': {
        borderColor: `#e7e7e7 !important`,
        borderRadius: 5,
        top: '0px !important',
    },
    '& fieldset legend': {
        display: 'none !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px !important',
    },

    '& .MuiSelect-select': {
        height: '25px !important',
        padding: '5px 0 0 14px !important',
        display: 'flex !important',
        alignItems: 'center !important',
        fontSize: '12px !important',
    },

    '& .MuiFormLabel-asterisk': {
        color: '#9C0101 !important',
    },
    '& input': {
        borderRadius: '15px !important',
        position: 'absolute',
        top: 0,
    },
}));
export const CustomTextFieldAdmin = styled(TextField)<{ labelstyle?: React.CSSProperties }>(
    ({ theme, labelstyle }) => ({
        borderRadius: 5,
        backgroundColor: `#f7f7f7 !important`,
        '& fieldset': {
            borderColor: `#e7e7e7 !important`,
            borderRadius: 5,
            top: '0px !important',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px !important',
        },
        '& .MuiOutlinedInput-root ': {
            height: '30px !important',
        },
        '& label': labelstyle,
        '& .MuiFormLabel-asterisk': {
            color: '#9C0101 !important',
        },
        '& input': {
            borderRadius: '5px !important',
        },
        '& label[data-shrink=false]+.MuiInputBase-formControl .muirtl-nxo287-MuiInputBase-input-MuiOutlinedInput-input::-webkit-input-placeholder':
            {
                opacity: '1 !important',
                zIndex: '10000 !important',
                visibility: 'visible !important',
                display: 'block !important',
                color: '#c4c4c4',
                fontFamily: 'iranSans !important',
                fontSize: 12,
            },
        '& .MuiInputLabel-root': {
            display: 'none !important',
        },
        '& .MuiInputLabel-root.MuiFormLabel-filled': {
            top: '1px !important',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            top: '1px !important',
        },
        '& fieldset legend': {
            display: 'none !important',
        },
    }),
);

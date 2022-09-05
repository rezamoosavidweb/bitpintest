import { createTheme } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = mainColor => augmentColor({ color: { main: mainColor } });
const lightPalette = {
    primary: {
        main: '#189285',
        contrastText: '#ffffff',
        light: '#00BFAC',
    },
    secondary: { main: '#00BBD0', contrastText: '#ffffff' },
    text: { secondary: '#00BBD0' },
    like: createColor('#00e676'),
    dislike: createColor('#ff3d00'),
    common: {
        back: '#f3f3f3',
        border: '#c4c4c4',
    },
};

const darkPalette: Theme = {
    primary: {
        main: '#610000',
        contrastText: '#ffffff',
        light: '#00BFAC',
    },
    secondary: { main: '#00BBD0', contrastText: '#000000' },
    text: { secondary: '#d00000' },
    like: createColor('#00e676'),
    dislike: createColor('#ff3d00'),
    common: {
        back: '#f3f3f3',
        border: '#c4c4c4',
    },
};

export type Theme = typeof lightPalette;

export const palettes = {
    light: lightPalette,
    dark: darkPalette,
};

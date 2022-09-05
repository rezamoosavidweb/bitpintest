import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRootSlice } from '../slice';
import { selectLanguage, selectRootKey } from '../slice/selectors';
import {
    ThemeProvider as OriginalThemeProvider,
    createTheme,
    StyledEngineProvider,
    PaletteColorOptions,
} from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { palettes } from './palette';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface CustomPalette {
        like: PaletteColorOptions;
        dislike: PaletteColorOptions;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        like: true;
        dislike: true;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface CommonColors {
        border: string;
        back: string;
        red: string;
        offBlack: string;
    }
    interface Palette {
        like?: Palette['primary'];
        dislike?: Palette['error'];
    }
    interface PaletteOptions {
        like?: Palette['primary'];
        dislike?: Palette['error'];
    }
}
declare module '@mui/material/styles/createTypography' {
    interface TypographyOptions {
        body3?: TypographyOptions['body1'];
        caption1?: TypographyOptions['caption'];
        caption2?: TypographyOptions['caption'];
        caption3?: TypographyOptions['caption'];
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        caption1: true;
        caption2: true;
        caption3: true;
        body1: true;
        body2: true;
        body3: true;
    }
}
// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

export const ThemeProvider = (props: { children: React.ReactChild }) => {
    useRootSlice();

    const themeState = useSelector(selectRootKey);
    const languageState = useSelector(selectLanguage);

    const { i18n } = useTranslation();
    useEffect(() => {
        // i18n.changeLanguage(languageState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const theme = createTheme({
        direction: i18n.dir(),
        palette:
            themeState === 'light'
                ? { mode: 'light', ...palettes.light }
                : { mode: 'dark', ...palettes.dark },
        spacing: 10,
        typography: {
            fontFamily: 'iranSans',
            h1: {
                fontSize: '30px',
                '@media(max-width:900px)': {
                    fontSize: '22px',
                },
            },
            h2: {
                fontSize: '22px',
                '@media(max-width:900px)': {
                    fontSize: '16px',
                },
                fontWeight: 'bold',
            },
            h3: {
                fontSize: '20px',
                fontWeight: 'bold',
            },
            h4: {
                fontSize: '18px',
                fontWeight: '400',
            },
            h5: {
                fontSize: '17px',
                fontWeight: '400',
            },
            h6: {
                fontSize: '16px',
                '@media(max-width:900px)': {
                    fontSize: '14px',
                },
                fontWeight: '400',
            },
            body1: {
                fontSize: '15px',
                fontWeight: '400',
            },
            body2: {
                fontSize: '14px',
                fontWeight: '400',
            },
            body3: {
                fontSize: '13px',
                fontWeight: '400',
            },
            caption1: {
                fontSize: '12px',
                fontWeight: '400',
            },
            caption2: {
                fontSize: '11px',
                fontWeight: '400',
            },
            caption3: {
                fontSize: '10px',
                fontWeight: '400',
            },
            allVariants: {
                fontFamily: 'iranSans',
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        borderRadius: 5,
                    },
                },
            },
        },
    });

    React.useEffect(() => {
        console.log(i18n.dir(), 'i18n.dir()');
        document.querySelector('body')?.setAttribute('dir', i18n.dir());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [i18n.language]);

    return (
        <StyledEngineProvider injectFirst>
            {i18n.dir() === 'rtl' ? (
                <RTL>
                    <OriginalThemeProvider theme={theme}>
                        {React.Children.only(props.children)}
                    </OriginalThemeProvider>
                </RTL>
            ) : (
                <OriginalThemeProvider theme={theme}>
                    {React.Children.only(props.children)}
                </OriginalThemeProvider>
            )}
        </StyledEngineProvider>
    );
};

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { palettes } from '../theme/palette';
import { isSystemDark } from '../theme/utils';

export const selectRoot = createSelector(
    [(state: RootState) => state.root || initialState],
    root => {
        if (root.selected === 'light') {
            return isSystemDark ? palettes.dark : palettes.light;
        }
        return palettes[root.selected];
    },
);

export const selectRootKey = createSelector(
    [(state: RootState) => state.root || initialState],
    root => root.selected,
);

export const selectLanguage = createSelector(
    [(state: RootState) => state.root || initialState],
    root => root.language,
);

export const selectDialogs = createSelector(
    [(state: RootState) => state.root || initialState],
    root => root.dialogs,
);

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { getLanguageFromStorage, getThemeFromStorage } from '../theme/utils';
import { appSaga } from './saga';
import { LanguageKeyType, ThemeKeyType, Root, DialogType } from './types';

export const initialState: Root = {
    selected: getThemeFromStorage() || 'light',
    language: getLanguageFromStorage() || 'en',
    dialogs: [],
};

export const slice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<ThemeKeyType>) {
            state.selected = action.payload;
        },
        changeLanguage(state, action: PayloadAction<LanguageKeyType>) {
            state.language = action.payload;
        },
        createDialog(state, action: PayloadAction<DialogType>) {
            console.log(action?.payload, 'payload');

            action.payload['id'] = action.payload['id'] ?? `${Date.now()}-${state.dialogs.length}`;
            action.payload['open'] = true;
            state.dialogs = [...state.dialogs, action?.payload];
        },
        closeAndRemoveDialog(state, action?: PayloadAction<string>) {},
        closeDialog(state, action?: PayloadAction<string>) {
            let currentDialog;
            if (action?.payload?.length && state.dialogs?.length) {
                currentDialog = state?.dialogs?.find(item => item['id'] === action?.payload);
                currentDialog.open = false;
            }
        },
        removeDialog(state, action?: PayloadAction<string>) {
            state.dialogs = state.dialogs.filter(item => item['id'] !== action?.payload);
        },
    },
});

export const { actions: rootActions, reducer } = slice;

export const useRootSlice = () => {
    useInjectReducer({ key: slice.name, reducer: slice.reducer });
    useInjectSaga({ key: slice.name, saga: appSaga });
    return { actions: slice.actions };
};

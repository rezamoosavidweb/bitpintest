import { palettes } from '../theme/palette';

export type ThemeKeyType = keyof typeof palettes | 'light';

export type LanguageKeyType = string;

export interface PlayerType {
    id?: number;
    name?: string;
    role?: {
        id: number;
        name: string;
    };
}

export interface RoleType {
    id?: number;
    name: string;
    type: 'citizen' | 'mafia';
    description: string;
    order: number;
    awakeInNight: boolean;
    isUsed: boolean;
}
export interface DialogType {
    closeButton?: boolean;
    open?: boolean;
    Body: React.FC<any>;
    Container?: React.FC<any>;
    id?: string;
    title?: string;
    callback?: any;
    navbarModal?: boolean;
    text?: string;
    onSubmit?: () => void;
    top?: number;
    canClose?: boolean;
    searchData?: any;
    hasSearch?: boolean;
    sideBarSearch?: boolean;
    topBar?: boolean;
    variables?: any;
}

export interface Root {
    selected: ThemeKeyType;
    language: LanguageKeyType;
    dialogs: DialogType[];
}

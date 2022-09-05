import * as slice from "..";
import { ThemeState, ThemeKeyType } from "../types";
import { RootState } from "types";
import { palettes } from "../../theme/palette";
import { selectTheme, selectThemeKey } from "../selectors";

describe("theme slice", () => {
    let state: ThemeState;

    beforeEach(() => {
        state = slice.initialState;
    });

    it("should return the initial state", () => {
        expect(slice.reducer(undefined, { type: "" })).toEqual(state);
    });

    it("should changeTheme", () => {
        expect(
            slice.reducer(state, slice.themeActions.changeTheme("dark")),
        ).toEqual<ThemeState>({ selected: "dark", language: "en" });
    });

    describe("selectors", () => {
        it("selectTheme", () => {
            let state: RootState = {};
            expect(selectTheme(state)).toEqual(palettes.light);
            state = {
                theme: { selected: "light", language: "en" },
            };
            expect(selectTheme(state)).toEqual(palettes.light);

            state = {
                theme: { selected: "dark", language: "en" },
            };
            expect(selectTheme(state)).toEqual(palettes.dark);
        });

        it("selectThemeKey", () => {
            let state: RootState = {};
            expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
                slice.initialState.selected,
            );

            state = {
                theme: { selected: "light", language: "en" },
            };
            expect(selectThemeKey(state)).toEqual<ThemeKeyType>(
                state.theme!.selected,
            );
        });
    });
});

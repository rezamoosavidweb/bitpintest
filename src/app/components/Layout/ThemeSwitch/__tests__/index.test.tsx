import { render, fireEvent } from "@testing-library/react";
import { ThemeSwitch } from "..";
import { configureAppStore } from "store/configureStore";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import ProvideThemeForTest from "utils/provideThemeForTest";

const renderThemeSwitch = (store: Store) =>
    render(
        <Provider store={store}>
            <ProvideThemeForTest>
                <ThemeSwitch />
            </ProvideThemeForTest>
        </Provider>,
    );
describe("<ThemeSwitch />", () => {
    let store: ReturnType<typeof configureAppStore>;

    beforeEach(() => {
        store = configureAppStore();
    });

    it("should have 2 radio buttons", () => {
        const languageSwitch = renderThemeSwitch(store);
        expect(languageSwitch.queryAllByRole("radio").length).toBe(2);
        languageSwitch.unmount();
    });

    it("should switch theme on click", () => {
        const languageSwitch = renderThemeSwitch(store);
        const radioButtons = languageSwitch.queryAllByRole(
            "radio",
        ) as HTMLInputElement[];
        expect(radioButtons[0].checked).toBe(true);
        fireEvent.click(radioButtons[1]);

        expect(radioButtons[1]).toBeChecked();
    });
});

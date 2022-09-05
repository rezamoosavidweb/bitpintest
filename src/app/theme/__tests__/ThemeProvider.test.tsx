import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { configureAppStore } from "store/configureStore";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { palettes } from "../palette";

const renderThemeProvider = (store: Store, Child: React.FunctionComponent) =>
    render(
        <Provider store={store}>
            <ThemeProvider
                theme={createTheme({
                    palette: { mode: "dark", ...palettes.dark },
                })}
            >
                <Child />
            </ThemeProvider>
        </Provider>,
    );

describe("<ThemeProvider />", () => {
    let store: ReturnType<typeof configureAppStore>;

    beforeEach(() => {
        store = configureAppStore();
    });

    it("should render its children", () => {
        const text = "Test";
        const children = () => <h1>{text}</h1>;
        const { queryByText } = renderThemeProvider(store, children);
        expect(queryByText(text)).toBeInTheDocument();
    });

    // it("should render selected theme", () => {
    //     let theme: any;
    //     const children = () => {
    //         // eslint-disable-next-line react-hooks/rules-of-hooks
    //         theme = useTheme();
    //         return <h1>a</h1>;
    //     };
    //     renderThemeProvider(store, children);
    //     expect(theme).toBe(selectTheme(store.getState() as any));
    // });
});

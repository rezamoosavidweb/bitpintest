import { render, fireEvent } from '@testing-library/react';
import i18next from 'i18next';
import { LanguageSwitch } from '..';
import { configureAppStore } from 'store/configureStore';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import ProvideThemeForTest from 'utils/provideThemeForTest';

const renderLanguageSwitch = (store: Store) =>
  render(
    <Provider store={store}>
      <ProvideThemeForTest>
        <LanguageSwitch />
      </ProvideThemeForTest>
    </Provider>,
  );
describe('<LanguageSwitch />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should have 2 radio buttons', () => {
    const languageSwitch = renderLanguageSwitch(store);
    expect(languageSwitch.queryAllByRole('radio').length).toBe(2);
  });

  it('should have translated FormLabel', async () => {
    i18next.changeLanguage('en');

    let languageSwitch = renderLanguageSwitch(store);
    let label = languageSwitch.queryByText('En');
    expect(label).toBeInTheDocument();

    languageSwitch.unmount();
    i18next.changeLanguage('fa');

    languageSwitch = renderLanguageSwitch(store);
    label = languageSwitch.queryByText('Fa');
    expect(label).toBeInTheDocument();
  });

  it('should change language on click', async () => {
    i18next.changeLanguage('en');
    const languageSwitch = renderLanguageSwitch(store);
    const radio2 = languageSwitch.queryAllByRole('radio')[1];
    fireEvent.click(radio2);
    expect(i18next.language).toEqual('fa');
  });
});

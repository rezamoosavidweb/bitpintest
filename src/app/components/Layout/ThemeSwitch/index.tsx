import * as React from 'react';
import { rootActions } from 'app/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'app/theme/utils';
import { ThemeKeyType } from 'app/slice/types';
import { selectRootKey } from 'app/slice/selectors';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface TestId extends React.HTMLAttributes<HTMLDivElement> {
  'data-testid'?: string;
}

export function ThemeSwitch() {
  const theme = useSelector(selectRootKey);
  const dispatch = useDispatch();

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;
    saveTheme(value);
    dispatch(rootActions.changeTheme(value));
  };

  return (
    <FormControl sx={{ padding: 1 }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={theme}
        onChange={handleThemeChange}
      >
        <FormControlLabel
          value="light"
          control={<Radio inputProps={{ 'data-testid': 'custom-radio' } as TestId} />}
          label="Light"
        />
        <FormControlLabel
          value="dark"
          control={<Radio data-testid="custom-radio" />}
          label="Dark"
        />
      </RadioGroup>
    </FormControl>
  );
}

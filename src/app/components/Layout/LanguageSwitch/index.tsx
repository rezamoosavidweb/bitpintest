import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { saveLanguage } from 'app/theme/utils';
import { rootActions } from 'app/slice';
import { useDispatch } from 'react-redux';

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    saveLanguage(language);
    dispatch(rootActions.changeLanguage(language));
  };
  //

  return (
    <FormControl sx={{ padding: 1 }}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={i18n.language}
        onChange={handleLanguageChange}
      >
        <FormControlLabel value="en" control={<Radio />} label="English" />
        <FormControlLabel value="fa" control={<Radio />} label="Persian" />
      </RadioGroup>
    </FormControl>
  );
}

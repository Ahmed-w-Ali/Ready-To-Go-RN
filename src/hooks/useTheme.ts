import {useContext} from 'react';
import {ThemeContext, ThemeContextType} from '../context/ThemeContext';

export const useTheme = (): ThemeContextType => {
  const {
    theme,
    isDark,
    isSystemPreference,
    switchTheme,
    switchThemeToSystemPreference,
  } = useContext(ThemeContext);

  return {
    theme,
    isDark,
    isSystemPreference,
    switchTheme,
    switchThemeToSystemPreference,
  };
};

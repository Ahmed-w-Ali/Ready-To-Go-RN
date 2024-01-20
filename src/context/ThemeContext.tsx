import React, {ReactNode, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setPreferenceTheme} from '../store/slice/settingSlice';
import {RootState} from '../store/store';

export const themes = {
  dark: 'dark',
  light: 'light',
};

export type ThemeContextType = {
  isDark: boolean;
  theme: string;
  isSystemPreference: boolean;
  switchTheme: (value: 'dark' | 'light') => void;
  switchThemeToSystemPreference: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  theme: themes.light,
  isSystemPreference: true,
  switchTheme: () => {},
  switchThemeToSystemPreference: () => {},
});

type TThemeContextProvider = {
  children: ReactNode;
};

const ThemeContextProvider = ({children}: TThemeContextProvider) => {
  const dispatch = useDispatch();
  const {preferenceTheme} = useSelector((state: RootState) => state.setting);
  const [theme, setTheme] = useState(themes.dark);

  const [isSystemPreference, setIsSystemPreference] = useState(false);

  const colorScheme = useColorScheme();

  const isDark = isSystemPreference
    ? colorScheme === 'dark'
    : theme === themes.dark;

  const switchTheme = (themeValue: 'dark' | 'light') => {
    if (themeValue) {
      setIsSystemPreference(false);
      setTheme(themeValue);
      dispatch(setPreferenceTheme(themeValue));
      return;
    }

    if (isDark) {
      setTheme(themes.light);
      dispatch(setPreferenceTheme(themes.light));
    } else {
      dispatch(setPreferenceTheme(themes.dark));
      setTheme(themes.dark);
    }
  };

  const switchThemeToSystemPreference = () => {
    setIsSystemPreference(prev => !prev);
  };

  useEffect(() => {
    if (isSystemPreference) {
      setTheme(colorScheme!);
      dispatch(setPreferenceTheme(colorScheme));
    }
    if (preferenceTheme) {
      setTheme(preferenceTheme);
    }
  }, [colorScheme, isSystemPreference, preferenceTheme, dispatch]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        switchTheme,
        isSystemPreference,
        switchThemeToSystemPreference,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

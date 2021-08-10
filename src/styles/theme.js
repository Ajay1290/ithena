import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import colorsFinal from './colors';

export const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#fff',
    text: '#333333',
    textLight: '#6C6C6C',

    divider: '#E5E5E5',
    primary: colorsFinal.brandPrimary,
    button: colorsFinal.brandPrimary,
    placeholderColor: '#6C6C6C',
    statusTheme: 'dark-content',
    menuColor: '#fafafa',
  },
};

export const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#001516',
    text: '#EFFFFF',
    textLight: '#CCCCCC',
    divider: '#666B6B',
    primary: colorsFinal.brandPrimary,
    primaryDisabled: colorsFinal.brandPrimaryDisable,
    placeholderColor: '#CCCCCC',
    statusTheme: 'light-content',
    menuColor: 'red',
    statusColor: '#00000044',
  },
};

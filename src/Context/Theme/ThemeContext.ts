import { Theme } from '../../Constants/@types';
import { createContext, useContext } from 'react';

type ThemeContextType = {
    theme: Theme;
    onChangeTheme?: () => void;
}

const DEFAULT_VALUE = {
    theme: Theme.Light
}


const ThemeContext = createContext<ThemeContextType>(DEFAULT_VALUE)

export const useThemeContext = () => useContext(ThemeContext)

export default ThemeContext;
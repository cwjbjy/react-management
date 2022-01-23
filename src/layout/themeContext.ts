import React from 'react';
import { Dispatch } from 'react';

interface ThemeContextType {
  theme: ThemeColor;
  changeTheme: Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = React.createContext<ThemeContextType>({} as ThemeContextType);

export default ThemeContext;

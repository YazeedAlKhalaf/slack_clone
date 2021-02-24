import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/global_styles/global_styles";
import { darkTheme, lightTheme } from "../components/theme/Theme";
import { lightThemeValue, darkThemeValue, themeKey } from "../utils/constants";

export const StyleContext = createContext();

const StyleProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem(themeKey) || lightThemeValue
  );

  useEffect(() => {
    localStorage.setItem(themeKey, themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === lightThemeValue) {
        return darkThemeValue;
      } else {
        return lightThemeValue;
      }
    });
  };

  const value = { themeMode, toggleTheme };

  return (
    <StyleContext.Provider value={value}>
      <ThemeProvider
        theme={themeMode === lightThemeValue ? lightTheme : darkTheme}
      >
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleContext.Provider>
  );
};

export default StyleProvider;

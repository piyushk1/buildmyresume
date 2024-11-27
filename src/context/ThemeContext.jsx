/* eslint-disable react/prop-types */
import { useState, createContext, useContext, useEffect } from "react";


const ThemeContext = createContext();

// Custom hook to use theme context
export const useAppTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider component
export const AppThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); 


  const toggleThemeMode = () => {
    setIsDarkTheme((prevTheme) => !prevTheme); 
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkTheme ? "dark" : "light"
    );
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ toggleThemeMode, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

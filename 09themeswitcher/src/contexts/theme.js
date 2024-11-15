import { createContext, useContext } from "react";
//  Craeting the context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Providing the theme
export const ThemeProvider = ThemeContext.Provider;

// Craeting the hook, so that any child can use it.
export default function useTheme() {
  return useContext(ThemeContext);
}

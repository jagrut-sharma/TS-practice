import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// Here we didn't write much TS because context value was known initially
export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

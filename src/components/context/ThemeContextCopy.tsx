import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextCopyProviderProps = {
  children: React.ReactNode;
};

// Here we didn't write much TS because context value was known initially
export const ThemeContextCopy = createContext(theme);

export const ThemeContextCopyProvider = ({
  children,
}: ThemeContextCopyProviderProps) => {
  return (
    <ThemeContextCopy.Provider value={theme}>
      {children}
    </ThemeContextCopy.Provider>
  );
};

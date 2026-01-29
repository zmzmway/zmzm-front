import { type ThemeProviderProps } from "next-themes";

export const THEME = {
  SYSTEM: "system",
  LIGHT: "light",
  DARK: "dark",
} as const;

export const themeConfig: Omit<ThemeProviderProps, "children"> = {
  attribute: "class",
  defaultTheme: THEME.SYSTEM,
  enableSystem: true,
  disableTransitionOnChange: true,
};
import { type ThemeProviderProps } from "next-themes";

export const themeConfig: Omit<ThemeProviderProps, "children"> = {
  attribute: "class",
  defaultTheme: "system",
  enableSystem: true,
  disableTransitionOnChange: true,
};

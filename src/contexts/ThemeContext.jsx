import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      // Explicit saved preference — always honour it
      if (saved === "light") return false;
      if (saved === "dark")  return true;
      // No saved preference — use OS default
      return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;
    } catch {
      return true;
    }
  });

  // Sync class on <html> and persist to localStorage whenever isDark changes
  useEffect(() => {
    const root = document.documentElement;
    const bgDark  = "#05070D";
    const bgLight = "#F0F4FF";

    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.backgroundColor         = bgDark;
      document.body.style.backgroundColor = bgDark;
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.backgroundColor         = bgLight;
      document.body.style.backgroundColor = bgLight;
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

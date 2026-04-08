"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative w-14 h-8 rounded-full bg-secondary border border-border p-1 flex items-center"
        aria-label="Toggle theme"
      >
        <div className="w-6 h-6 rounded-full bg-muted" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-14 h-8 rounded-full bg-secondary border border-border p-1 flex items-center transition-colors duration-300 hover:border-primary/50"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Track icons */}
      <Sun className="absolute left-1.5 w-4 h-4 text-amber-500 opacity-40" aria-hidden="true" />
      <Moon className="absolute right-1.5 w-4 h-4 text-blue-400 opacity-40" aria-hidden="true" />
      
      {/* Knob */}
      <div
        className={`w-6 h-6 rounded-full bg-foreground flex items-center justify-center shadow-md transition-transform duration-300 ease-out ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-background" aria-hidden="true" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-background" aria-hidden="true" />
        )}
      </div>
    </button>
  );
};

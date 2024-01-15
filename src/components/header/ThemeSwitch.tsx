"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) {
    return null;
  }
  if (resolvedTheme === "dark") {
    return (
      <Sun
        strokeWidth={1}
        className="hover:cursor-pointer animate-fade-in"
        onClick={() => setTheme("light")}
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <Moon
        strokeWidth={1}
        className="hover:cursor-pointer animate-fade-in"
        onClick={() => setTheme("dark")}
      />
    );
  }
}

export default ThemeSwitch;

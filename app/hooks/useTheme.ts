'use client';

import { useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    const isDark = theme === 'dark';
    setTheme(isDark ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark', !isDark);
  };
  return { theme, toggleTheme };
}

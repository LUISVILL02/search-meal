import { create } from 'zustand';

type ThemeState = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  };

  const getStoredTheme = (): 'light' | 'dark' => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'light';
  };
  
  const useThemeStore = create<ThemeState>((set) => ({
    theme: getStoredTheme(),
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme); 
        return { theme: newTheme };
      }),
  }));
  
  export default useThemeStore;
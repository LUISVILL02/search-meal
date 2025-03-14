

const ThemeToggle = () => {
    const toggleTheme = () => {
        console.log("cambiando el tema")
        const html = document.documentElement;
        html.classList.toggle('dark');
      };

  return (
    <button
      onClick={toggleTheme}
      className="absolute right-5 p-2 bg-secondary dark:bg-gray-100 rounded-lg cursor-pointer"
    >
      🌙/☀️
    </button>
  );
};

export default ThemeToggle;
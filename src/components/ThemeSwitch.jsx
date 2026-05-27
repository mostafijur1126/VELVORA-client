"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        className={`p-2 rounded-full border border-gray-300 dark:border-gray-700 
                 ${theme === "dark" ? "bg-gray-900" : "bg-white"} `}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-black" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;

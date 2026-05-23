import React, { useEffect } from "react";
import assets from "../assets/assets";

const Themetogglebtn = ({ theme, setTheme }) => {

  useEffect(() => {
    const DataMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prefersDarksMode ? 'dark' : 'light'))
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme])

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            alt="moon-icon"
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"
            alt="sun-icon"
          />
        )}
      </button>
    </>
  );
};

export default Themetogglebtn;

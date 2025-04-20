"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? (
            <MdLightMode
              className="text-xl cursor-pointer hover:text-amber-500"
              onClick={() => setTheme("light")}
            />
          ) : (
            <BsFillMoonFill
              className="text-xl cursor-pointer hover:text-amber-500"
              onClick={() => setTheme("dark")}
            />
          )}
        </button>
      )}
    </>
  );
};

export default DarkModeSwitch;

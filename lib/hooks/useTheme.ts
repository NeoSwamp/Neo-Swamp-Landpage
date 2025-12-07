import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState("cyberNeon");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === "cyberNeon" ? "cyberNeon-dark" : "cyberNeon";
        setTheme(newTheme);
    };

    return { theme, toggleTheme };
};

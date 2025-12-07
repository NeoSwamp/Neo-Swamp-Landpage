import { useTheme } from "@/lib/hooks/useTheme";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="px-4 py-2 rounded bg-accent text-accent-foreground hover:bg-accent-hover transition"
            onClick={toggleTheme}
        >
            {theme === "cyberNeon" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
};
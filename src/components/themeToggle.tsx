import { Sun, Moon } from "lucide-react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps) {
    const isDark = theme === "dark";

    return (
    <>
        <div className="toggleHolder">
            <span className="toggleTrack"></span>
            <button type="button" aria-label="Dark Mode" aria-pressed={isDark} className="toggleComp" onClick={onToggleTheme}>{isDark ? <Moon size={20} /> : <Sun size={20} />}</button>
        </div>
    </>
    )
}

export default ThemeToggle

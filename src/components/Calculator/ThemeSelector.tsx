import useTheme, { Theme } from "../../hooks/useTheme";

const THEMES: Theme[] = ["netural", "light", "dark"];

export default function ThemeSelector() {
  const [theme, setTheme] = useTheme();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const themeIndex = parseInt(e.target.value) - 1;
    setTheme(THEMES[themeIndex]);
  }

  return (
    <div className="theme-selector-container">
      <div className="theme-selector-slider-ticks">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="theme-selector-label">THEME</div>
      <input
        type="range"
        id="theme-selector-slider"
        name="theme-selector-slider"
        min="1"
        max="3"
        value={THEMES.indexOf(theme) + 1}
        onChange={handleChange}
        step="1"
      />
    </div>
  );
}

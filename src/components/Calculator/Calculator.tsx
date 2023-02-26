import Display from "./Display";
import ThemeSelector from "./ThemeSelector";
import Pad from "./CalculatorPad/Pad";
import UseCalculator from "../../hooks/useCalculator";

export default function Calculator() {
  const { displayValue, enter, reset, equal, remove } = UseCalculator();

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h1 className="calculator-heading">calc</h1>
        <ThemeSelector />
      </div>
      <Display value={displayValue} />
      <Pad
        handleValueChanged={(val) => enter(val)}
        handleDelete={() => {
          remove();
        }}
        handleReset={() => reset()}
        handleEqual={() => {
          equal();
        }}
      />
    </div>
  );
}

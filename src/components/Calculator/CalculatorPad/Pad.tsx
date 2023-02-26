import DeleteButton from "./DeleteButton";
import EqualButton from "./EqualButton";
import ResetButton from "./ResetButton";
import ValueButton from "./ValueButton";

export interface PadProps {
  handleValueChanged: (value: string) => void;
  handleDelete: () => void;
  handleReset: () => void;
  handleEqual: () => void;
}

const buttons = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
  "RESET",
  "=",
];

export default function Pad(props: PadProps) {
  return (
    <div className="pad">
      {buttons.map((button, index) => {
        if (button === "DEL") {
          return (
            <div key={index} className="pad-button-container">
              <DeleteButton handleDelete={props.handleDelete} />
            </div>
          );
        } else if (button === "=") {
          return (
            <div
              key={index}
              className="pad-button-container pad-long-button-container"
            >
              <EqualButton handleEqual={props.handleEqual} />
            </div>
          );
        } else if (button === "RESET") {
          return (
            <div
              key={index}
              className="pad-button-container pad-long-button-container"
            >
              <ResetButton handleReset={props.handleReset} />
            </div>
          );
        } else {
          return (
            <div key={index} className="pad-button-container">
              <ValueButton
                handleValueChanged={props.handleValueChanged}
                button={button}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

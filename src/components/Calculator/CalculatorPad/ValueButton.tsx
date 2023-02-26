import { PadProps } from "./Pad";

interface ValueButtonProps extends Pick<PadProps, "handleValueChanged"> {
  button: string;
}

export default function ValueButton(props: ValueButtonProps) {
  return (
    <button
      className="pad-button pad-value-button"
      onClick={(e) => {
        e.preventDefault();

        props.handleValueChanged(props.button);
      }}
    >
      {props.button}
    </button>
  );
}

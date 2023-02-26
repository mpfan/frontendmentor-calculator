import { PadProps } from "./Pad";

interface ResetButtonProps extends Pick<PadProps, "handleReset"> {}

export default function ResetButton(props: ResetButtonProps) {
  return (
    <button
      className="pad-button pad-reset-button"
      onClick={(e) => {
        e.preventDefault();

        props.handleReset();
      }}
    >
      RESET
    </button>
  );
}

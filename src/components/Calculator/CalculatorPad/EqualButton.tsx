import { PadProps } from "./Pad";

interface EqualButtonProps extends Pick<PadProps, "handleEqual"> {}

export default function EqualButton(props: EqualButtonProps) {
  return (
    <button
      className="pad-button pad-equal-button"
      onClick={(e) => {
        e.preventDefault();

        props.handleEqual();
      }}
    >
      =
    </button>
  );
}

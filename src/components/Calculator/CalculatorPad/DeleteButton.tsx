import { PadProps } from "./Pad";

interface DeleteButtonProps extends Pick<PadProps, "handleDelete"> {}

export default function DeleteButton(props: DeleteButtonProps) {
  return (
    <button
      className="pad-button pad-delete-button"
      onClick={(e) => {
        e.preventDefault();

        props.handleDelete();
      }}
    >
      DEL
    </button>
  );
}

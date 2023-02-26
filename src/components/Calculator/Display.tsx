interface DisplayProps {
  value: string;
}

export default function Display(props: DisplayProps) {
  return (
    <div className="display">
      <div className="display-value">{props.value}</div>
    </div>
  );
}

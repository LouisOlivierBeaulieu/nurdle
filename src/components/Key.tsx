interface Props {
  value: string;
  click: (value: string) => void;
  keyClass?: string;
}

function Key({ value, click, keyClass }: Props) {
  return (
    <button className={keyClass} onClick={() => click(value)}>
      {value}
    </button>
  );
}

export default Key;

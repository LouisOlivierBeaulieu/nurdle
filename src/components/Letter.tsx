interface Props {
  value: string;
  color: string;
  pulse: string;
  index: number;
  current: string;
  tryNb: number;
  onClickLetter: (event: any) => void;
}

function Letter({
  value,
  color,
  pulse,
  index,
  current,
  tryNb,
  onClickLetter,
}: Props) {
  const time = 0.3;
  return (
    <div
      id={tryNb + "-" + index + "-outer"}
      className={current + " letter " + pulse}
      style={
        color !== ""
          ? {
              animation: `flip ${time}s ease ${
                index * time
              }s 1 normal forwards, ${color} ${time * 2}s ease ${
                index * time
              }s 1 normal forwards`,
            }
          : {}
      }
      onClick={onClickLetter}
    >
      <div
        onClick={onClickLetter}
        id={tryNb + "-" + index + "-inner"}
        style={
          color !== ""
            ? {
                animation: `flip ${time}s ease ${
                  index * time
                }s 1 normal forwards`,
              }
            : {}
        }
      >
        {value}
      </div>
    </div>
  );
}

export default Letter;

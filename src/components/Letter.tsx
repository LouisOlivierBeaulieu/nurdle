interface Props {
  value: string;
  color: string;
  pulse: string;
  index: number;
}

function Letter({ value, color, pulse, index }: Props) {
  const time = 0.3;
  return (
    <div
      className={" letter " + pulse}
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
    >
      <div
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

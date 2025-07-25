import React from "react";
import Letter from "./Letter";

interface Props {
  size: number;
  value: string;
  invalidWord: boolean;
  pulsing: boolean;
  colors: string[];
  currentLetter: number;
  tryNb: number;
  onClickLetter: (event: any) => void;
}

function Word({
  size,
  value,
  invalidWord,
  colors,
  pulsing,
  currentLetter,
  tryNb,
  onClickLetter,
}: Props) {
  let word: React.JSX.Element[] = [];

  for (let i = 0; i < size; i++) {
    word.push(
      <Letter
        key={"letter-" + i}
        value={value[i]}
        color={colors[i]}
        pulse={
          pulsing && ((currentLetter - 1 === i))
            ? "pulse"
            : ""
        }
        index={i}
        current={currentLetter === i || (currentLetter === size && i === size -1)  ? "current" : ""}
        tryNb={tryNb}
        onClickLetter={onClickLetter}
      />
    );
  }

  return <div className={invalidWord ? "word shaking" : "word"}>{word}</div>;
}

export default Word;

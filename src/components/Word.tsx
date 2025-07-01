import React from "react";
import Letter from "./Letter";

interface Props {
  size: number;
  value: string;
  invalidWord: boolean;
  pulsing: boolean;
  colors: string[];
}

function Word({ size, value, invalidWord, colors, pulsing }: Props) {
  let word: React.JSX.Element[] = [];

  for (let i = 0; i < size; i++) {
    word.push(
      <Letter
        key={"letter-" + i}
        value={value[i]}
        color={colors[i]}
        pulse={pulsing && value[i] && !value[i + 1] ? "pulse" : ""}
        index={i}
      />
    );
  }

  return <div className={invalidWord ? "word shaking" : "word"}>{word}</div>;
}

export default Word;

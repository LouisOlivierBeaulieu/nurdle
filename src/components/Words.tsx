import Word from "./Word";

interface Props {
  size: number;
  tries: number;
  currentInputs: string[];
  currentTry: number;
  invalidWord: boolean;
  inputsColors: string[][];
}

function Words({
  size,
  tries,
  currentInputs,
  currentTry,
  invalidWord,
  inputsColors,
}: Props) {
  let words: React.JSX.Element[] = [];
  for (let i = 0; i < tries; i++) {
    words.push(
      <Word
        key={"word-" + i}
        size={size}
        value={currentInputs[i]}
        invalidWord={currentTry === i ? invalidWord : false}
        colors={inputsColors[i]}
        pulsing={currentTry === i}
      />
    );
  }

  return <div id="words">{words}</div>;
}

export default Words;

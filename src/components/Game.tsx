import { useCallback, useRef, useState } from "react";
import { GAME_STATE_MENU } from "../constants";
import Keyboard from "./Keyboard";
import Words from "./Words";
import { en_3 } from "../wordlists/en_3";
import { en_4 } from "../wordlists/en_4";
import { en_5 } from "../wordlists/en_5";
import { en_6 } from "../wordlists/en_6";
import { en_7 } from "../wordlists/en_7";
import { en_9 } from "../wordlists/en_9";
import { en_8 } from "../wordlists/en_8";
import { en_10 } from "../wordlists/en_10";

function getWordlist(size: number) {
  let wordlist: string[];
  switch (size) {
    case 3:
      wordlist = en_3;
      break;
    case 4:
      wordlist = en_4;
      break;
    case 5:
      wordlist = en_5;
      break;
    case 6:
      wordlist = en_6;
      break;
    case 7:
      wordlist = en_7;
      break;
    case 8:
      wordlist = en_8;
      break;
    case 9:
      wordlist = en_9;
      break;
    case 10:
      wordlist = en_10;
      break;
    default:
      wordlist = en_5;
  }
  return wordlist;
}

interface Props {
  setGameState: (gameState: string) => void;
  tries: number;
  size: number;
}

function Game({ setGameState, tries, size }: Props) {
  let wordlistRef = useRef(getWordlist(size));
  let goalWordRef = useRef(
    wordlistRef.current[Math.floor(Math.random() * wordlistRef.current.length)]
  );

  const [currentInputs, setCurrentInputs] = useState(Array(tries).fill(""));
  const [currentTry, setCurrentTry] = useState(0);
  const [invalidWord, setInvalidWord] = useState(false);
  const [inputsColors, setInputsColors] = useState(
    Array(tries).fill(Array(size).fill(""))
  );
  const [keyColors, setkeyColors] = useState(Array(26).fill(""));

  const onClickLetter = useCallback(
    (value: string) => {
      if (currentInputs[currentTry].length < size) {
        let newInputs = [...currentInputs];
        newInputs[currentTry] += value;
        setCurrentInputs(newInputs);
      }
    },
    [currentInputs, setCurrentInputs, currentTry, size]
  );

  const onClickBackSpace = useCallback(() => {
    let newInputs = [...currentInputs];
    newInputs[currentTry] = newInputs[currentTry].slice(0, -1);
    setCurrentInputs(newInputs);
  }, [currentInputs, setCurrentInputs, currentTry]);

  const validateWord = useCallback(
    async (word: string) => {
      let tempWord = word.toUpperCase().split("");
      let tempGoalWord = goalWordRef.current.toUpperCase().split("");

      let newInputsColors = [...inputsColors];
      newInputsColors[currentTry] = [...newInputsColors[currentTry]];

      let newKeyColors = [...keyColors];

      //Green
      for (let i = 0; i < tempWord.length; ++i) {
        if (tempGoalWord[i] === tempWord[i]) {
          newInputsColors[currentTry][i] = "green";
          newKeyColors[tempWord[i].charCodeAt(0) - 65] = "green";
          tempWord[i] = "";
          tempGoalWord[i] = "";
        }
      }

      //Yellow
      for (let i = 0; i < tempWord.length; ++i) {
        if (tempWord[i] !== "") {
          if (tempGoalWord.indexOf(tempWord[i]) !== -1) {
            newInputsColors[currentTry][i] = "yellow";
            if (newKeyColors[tempWord[i].charCodeAt(0) - 65] !== "green") {
              newKeyColors[tempWord[i].charCodeAt(0) - 65] = "yellow";
            }
            tempGoalWord[tempGoalWord.indexOf(tempWord[i])] = "";
            tempWord[i] = "";
          }
        }
      }

      //Grey
      for (let i = 0; i < tempWord.length; ++i) {
        if (tempWord[i] !== "") {
          if (
            newKeyColors[tempWord[i].charCodeAt(0) - 65] !== "green" &&
            newKeyColors[tempWord[i].charCodeAt(0) - 65] !== "yellow"
          ) {
            newKeyColors[tempWord[i].charCodeAt(0) - 65] = "grey";
          }
          newInputsColors[currentTry][i] = "grey";
        }
      }

      setkeyColors(newKeyColors);
      setInputsColors(newInputsColors);
    },
    [inputsColors, currentTry, goalWordRef.current]
  );

  const onClickEnter = useCallback(() => {
    if (
      currentInputs[currentTry].length === size &&
      wordlistRef.current.includes(currentInputs[currentTry].toLowerCase())
    ) {
      validateWord(currentInputs[currentTry]);
      let newCurrentTry = currentTry + 1;
      setCurrentTry(newCurrentTry);
    } else {
      setInvalidWord(true);
      setTimeout(() => {
        setInvalidWord(false);
      }, 350);
    }
  }, [currentInputs, currentTry, size]);

  return (
    <>
      <button onClick={() => setGameState(GAME_STATE_MENU)}>
        {goalWordRef.current}
      </button>
      <Words
        currentInputs={currentInputs}
        tries={tries}
        size={size}
        currentTry={currentTry}
        invalidWord={invalidWord}
        inputsColors={inputsColors}
      ></Words>
      <Keyboard
        onClickLetter={onClickLetter}
        onClickEnter={onClickEnter}
        onClickBackSpace={onClickBackSpace}
        keyColors={keyColors}
      />
    </>
  );
}

export default Game;

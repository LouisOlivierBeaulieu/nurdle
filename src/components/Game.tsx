import { useCallback, useEffect, useRef, useState } from "react";
import Keyboard from "./Keyboard";
import Words from "./Words";

import GameOver from "./GameOver";
import {
  NURDLE_LOSSES_LS_KEY,
  NURDLE_STATE_LOSE,
  NURDLE_STATE_PLAYING,
  NURDLE_STATE_WIN,
  NURDLE_WINS_LS_KEY,
} from "../constants";
import { getWordlist } from "../utils/getWordlist";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

interface Props {
  setGameState: (gameState: string) => void;
  tries: number;
  size: number;
  lang: string;
}

function Game({ setGameState, tries, size, lang }: Props) {
  let wordlistRef = useRef(getWordlist(size, lang));
  let goalWordRef = useRef(
    wordlistRef.current[Math.floor(Math.random() * wordlistRef.current.length)]
  );

  const [currentInputs, setCurrentInputs] = useState(
    Array(tries).fill(" ".repeat(size))
  );
  const [currentTry, setCurrentTry] = useState(0);
  const [invalidWord, setInvalidWord] = useState(false);
  const [inputsColors, setInputsColors] = useState(
    Array(tries).fill(Array(size).fill(""))
  );
  const [keyColors, setkeyColors] = useState(Array(26).fill(""));
  const [nurdleState, setNurdleState] = useState(NURDLE_STATE_PLAYING);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [pulsing, setPulsing] = useState(false);

  const onClickLetter = useCallback(
    (event: any) => {
      const id = event.target.id;
      if (currentTry === parseInt(id.substring(0, id.indexOf("-")))) {
        setCurrentLetter(
          parseInt(
            id.substring(
              id.indexOf("-") + 1,
              id.indexOf("-", id.indexOf("-") + 1)
            )
          )
        );
      }
    },
    [currentTry]
  );

  const onClickKey = useCallback(
    (value: string) => {
      if (currentLetter < size) {
        let newInputs = [...currentInputs];
        newInputs[currentTry] =
          newInputs[currentTry].slice(0, currentLetter) +
          value +
          newInputs[currentTry].slice(currentLetter + 1);
        setCurrentInputs(newInputs);
        setCurrentLetter(currentLetter + 1 > size ? size : currentLetter + 1);
        setPulsing(true);
        setTimeout(() => {
          setPulsing(false);
        }, 150);
      }
    },
    [currentInputs, setCurrentInputs, currentTry, size, currentLetter]
  );

  const onClickBackSpace = useCallback(() => {
    if (currentInputs[currentTry].trim() !== "") {
      let newInputs = [...currentInputs];
      newInputs[currentTry] =
        newInputs[currentTry].slice(
          0,
          newInputs[currentTry].trimEnd().length - 1
        ) +
        " " +
        newInputs[currentTry].slice(newInputs[currentTry].trimEnd().length);
      setCurrentInputs(newInputs);
      setCurrentLetter(
        newInputs[currentTry].trimEnd().length < 0
          ? 0
          : newInputs[currentTry].trimEnd().length
      );
    }
  }, [currentInputs, setCurrentInputs, currentTry, currentLetter]);

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

      if (
        newInputsColors[currentTry].every((color: string) => color === "green")
      ) {
        let wins = loadFromLocalStorage(NURDLE_WINS_LS_KEY);
        wins = wins !== null ? wins : 0;
        saveToLocalStorage(NURDLE_WINS_LS_KEY, wins + 1);
        setNurdleState(NURDLE_STATE_WIN);
      } else if (currentTry + 1 === tries) {
        let losses = loadFromLocalStorage(NURDLE_LOSSES_LS_KEY);
        losses = losses !== null ? losses : 0;
        saveToLocalStorage(NURDLE_LOSSES_LS_KEY, losses + 1);
        setNurdleState(NURDLE_STATE_LOSE);
      }
    },
    [inputsColors, currentTry, goalWordRef.current]
  );

  const onClickEnter = useCallback(() => {
    if (wordlistRef.current.includes(currentInputs[currentTry].toLowerCase())) {
      validateWord(currentInputs[currentTry]);
      let newCurrentTry = currentTry + 1;
      setCurrentTry(newCurrentTry);
      setCurrentLetter(0);
    } else {
      setInvalidWord(true);
      setTimeout(() => {
        setInvalidWord(false);
      }, 350);
    }
  }, [currentInputs, currentTry, size]);

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        onClickEnter();
      } else if (e.keyCode === 8) {
        onClickBackSpace();
      } else if (e.keyCode >= 65 && e.keyCode <= 90) {
        onClickKey(String.fromCharCode(e.keyCode).toUpperCase());
      } else if (e.keyCode === 37) {
        if (currentLetter === size) {
          setCurrentLetter(currentLetter - 2);
        } else {
          setCurrentLetter(currentLetter - 1 < 0 ? 0 : currentLetter - 1);
        }
      } else if (e.keyCode === 39) {
        setCurrentLetter(currentLetter + 1 > size ? size : currentLetter + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClickEnter, onClickBackSpace, onClickKey]);

  return (
    <>
      {nurdleState !== NURDLE_STATE_PLAYING && (
        <GameOver
          won={inputsColors[currentTry - 1].every(
            (color: string) => color === "green"
          )}
          tries={currentTry}
          goalWord={goalWordRef.current.toUpperCase()}
          setGameState={setGameState}
          lang={lang}
        ></GameOver>
      )}
      <Words
        currentInputs={currentInputs}
        tries={tries}
        size={size}
        currentTry={currentTry}
        invalidWord={invalidWord}
        inputsColors={inputsColors}
        currentLetter={currentLetter}
        onClickLetter={onClickLetter}
        pulsing={pulsing}
      ></Words>
      <Keyboard
        onClickKey={onClickKey}
        onClickEnter={onClickEnter}
        onClickBackSpace={onClickBackSpace}
        keyColors={keyColors}
      />
    </>
  );
}

export default Game;

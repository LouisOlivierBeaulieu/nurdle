import { GAME_STATE_NURDLE } from "../constants";
import LanguagePicker from "./LanguagePicker";
import NumberSelector from "./NumberSelector";

interface Props {
  setGameState: (gameState: string) => void;
  setSize: (size: number) => void;
  size: number;
  setTries: (tries: number) => void;
  tries: number;
  setLang: (lang: string) => void;
  lang: string;
}

function Menu({
  setGameState,
  setSize,
  setTries,
  tries,
  size,
  setLang,
  lang,
}: Props) {
  
  //setSize(parseInt((e.target as HTMLInputElement).value));
  return (
    <>
      <h1>Nurdle</h1>
      <LanguagePicker setLang={setLang} lang={lang}></LanguagePicker>
      <NumberSelector label="Word Size" value={size} setValue={setSize} min={3} max={7}></NumberSelector>
      <NumberSelector label="Tries" value={tries} setValue={setTries} min={3} max={7}></NumberSelector>
      <button
        id="nurdle-play-button"
        onClick={() => setGameState(GAME_STATE_NURDLE)}
        value="Play"
      >
        Play Nurdle
      </button>
    </>
  );
}

export default Menu;

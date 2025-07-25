import { GAME_STATE_NURDLE } from "../constants";
import LanguagePicker from "./LanguagePicker";

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
  return (
    <>
      <h1>Nurdle</h1>
      <LanguagePicker setLang={setLang} lang={lang}></LanguagePicker>
      <label htmlFor="size">Word size:</label>
      <input
        type="number"
        id="size"
        min="3"
        max="7"
        value={size}
        onInput={(e) => {
          setSize(parseInt((e.target as HTMLInputElement).value));
        }}
      />
      <br />
      <label htmlFor="tries">Tries:</label>
      <input
        type="number"
        id="tries"
        min="1"
        max="7"
        value={tries}
        onInput={(e) => {
          setTries(parseInt((e.target as HTMLInputElement).value));
        }}
      />
      <br />
      <br />
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

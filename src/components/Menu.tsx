import { GAME_STATE_NURDLE } from "../constants";

interface Props {
  setGameState: (gameState: string) => void;
  setSize: (size: number) => void;
  size: number;
  setTries: (tries: number) => void;
  tries: number;
}

function Menu({ setGameState, setSize, setTries, tries, size }: Props) {
  return (
    <>
      <h1>Nurdle</h1>
      <label htmlFor="size">Word size:</label>
      <input
        type="number"
        id="size"
        min="3"
        max="10"
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
        max="10"
        value={tries}
        onInput={(e) => {
          setTries(parseInt((e.target as HTMLInputElement).value));
        }}
      />
      <br />
      <br />
      <button onClick={() => setGameState(GAME_STATE_NURDLE)} value="Play">
        Play Nurdle
      </button>
    </>
  );
}

export default Menu;

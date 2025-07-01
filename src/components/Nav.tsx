import { GAME_STATE_MENU } from "../constants";

interface Props {
  children: string;
  setGameState: (gameState: string) => void;
}

function Nav({ children, setGameState }: Props) {
  return (
    <div id="nav">
      <a id="title" onClick={() => setGameState(GAME_STATE_MENU)}>
        {children}
      </a>
    </div>
  );
}

export default Nav;

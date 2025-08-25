import { useState } from "react";
import {
  GAME_STATE_MENU,
  NURDLE_LOSSES_LS_KEY,
  NURDLE_WINS_LS_KEY,
} from "../constants";
import { loadFromLocalStorage } from "../utils/localStorage";

interface Props {
  children: string;
  setGameState: (gameState: string) => void;
}

function Nav({ children, setGameState }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const flag = "FLAG{test}";
  let losses = loadFromLocalStorage(NURDLE_LOSSES_LS_KEY);
  losses = losses !== null ? losses : 0;

  let wins = loadFromLocalStorage(NURDLE_WINS_LS_KEY);
  wins = wins !== null ? wins : 0;

  let winRatio = wins / (losses + wins);
  let stringWinRatio = isNaN(winRatio) ? 0.0 : winRatio.toFixed(2);
  return (
    <div id="nav">
      <a id="title" onClick={() => setGameState(GAME_STATE_MENU)}>
        {children}
      </a>
      <div className="nav-menu">
        <button
          className="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <img src={menuOpen ? "nurdle-logo-green.png" : "nurdle-logo.png"} alt="Player Stats Menu" width={40}></img>
        </button>
        {menuOpen && (
          <div className="dropdown">
            <h4>Your Nurdle stats</h4>
            <ul>
              <li>Total games: {losses + wins}</li>
              <li>Win Ratio: {stringWinRatio}</li>
              <li>Wins: {wins}</li>
              <li>Losses: {losses}</li>
              {wins === 987523 &&
              <li>{flag}</li>
              }
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;

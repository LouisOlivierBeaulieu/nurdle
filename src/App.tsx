import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import { GAME_STATE_MENU } from "./constants";
import Game from "./components/Game";
import Nav from "./components/Nav";

function App() {
  const [gameState, setGameState] = useState(GAME_STATE_MENU);
  const [size, setSize] = useState(5);
  const [tries, setTries] = useState(6);

  return (
    <>
      <Nav setGameState={setGameState}>Nurdle</Nav>
      {gameState === GAME_STATE_MENU ? (
        <Menu
          setGameState={setGameState}
          setSize={setSize}
          setTries={setTries}
          tries={tries}
          size={size}
        />
      ) : (
        <Game setGameState={setGameState} tries={tries} size={size} />
      )}
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </>
  );
}

export default App;

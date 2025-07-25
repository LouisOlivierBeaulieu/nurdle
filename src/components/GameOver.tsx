import { GAME_STATE_MENU, LANG_FR } from "../constants";

interface Props {
  goalWord: string;
  tries: number;
  setGameState: (gameState: string) => void;
  lang: string;
}

function GameOver({ goalWord, tries, setGameState, lang }: Props) {
  return (
    <div id="game-over">
      <span>Word : {goalWord}</span>
      <span>Tries : {tries}</span>
      <button onClick={() => setGameState(GAME_STATE_MENU)}>Menu</button>
      <button
        onClick={() => {
          if (lang === LANG_FR) {
            window.location.href = `https://dictionnaire.lerobert.com/definition/${goalWord}`;
          } else {
            window.location.href = `https://www.oed.com/search/dictionary/?scope=Entries&q=${goalWord}`;
          }
        }}
      >{`Definition of ${goalWord}`}</button>
    </div>
  );
}

export default GameOver;

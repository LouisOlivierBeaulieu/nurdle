import { useEffect } from "react";
import Key from "./Key";

interface Props {
  onClickLetter: (value: string) => void;
  onClickEnter: () => void;
  onClickBackSpace: () => void;
  keyColors: string[];
}

function Keyboard({
  onClickEnter,
  onClickBackSpace,
  onClickLetter,
  keyColors,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.keyCode === 13) {
        onClickEnter();
      } else if (e.keyCode === 8) {
        onClickBackSpace();
      } else if (e.keyCode >= 65 && e.keyCode <= 90) {
        onClickLetter(String.fromCharCode(e.keyCode).toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClickEnter, onClickBackSpace, onClickLetter]);

  return (
    <div id="keyboard">
      <div className="row">
        <Key
          value="Q"
          click={onClickLetter}
          keyClass={keyColors["Q".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="W"
          click={onClickLetter}
          keyClass={keyColors["W".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="E"
          click={onClickLetter}
          keyClass={keyColors["E".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="R"
          click={onClickLetter}
          keyClass={keyColors["R".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="T"
          click={onClickLetter}
          keyClass={keyColors["T".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="Y"
          click={onClickLetter}
          keyClass={keyColors["Y".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="U"
          click={onClickLetter}
          keyClass={keyColors["U".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="I"
          click={onClickLetter}
          keyClass={keyColors["I".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="O"
          click={onClickLetter}
          keyClass={keyColors["O".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="P"
          click={onClickLetter}
          keyClass={keyColors["P".charCodeAt(0) - 65] + " key"}
        />
        <Key value="⌫" click={onClickBackSpace} keyClass="backspace" />
      </div>
      <div className="row">
        <Key
          value="A"
          click={onClickLetter}
          keyClass={keyColors["A".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="S"
          click={onClickLetter}
          keyClass={keyColors["S".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="D"
          click={onClickLetter}
          keyClass={keyColors["D".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="F"
          click={onClickLetter}
          keyClass={keyColors["F".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="G"
          click={onClickLetter}
          keyClass={keyColors["G".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="H"
          click={onClickLetter}
          keyClass={keyColors["H".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="J"
          click={onClickLetter}
          keyClass={keyColors["J".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="K"
          click={onClickLetter}
          keyClass={keyColors["K".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="L"
          click={onClickLetter}
          keyClass={keyColors["L".charCodeAt(0) - 65] + " key"}
        />
        <Key value="↵" click={onClickEnter} keyClass="enter" />
      </div>
      <div className="row">
        <Key
          value="Z"
          click={onClickLetter}
          keyClass={keyColors["Z".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="X"
          click={onClickLetter}
          keyClass={keyColors["X".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="C"
          click={onClickLetter}
          keyClass={keyColors["C".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="V"
          click={onClickLetter}
          keyClass={keyColors["V".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="B"
          click={onClickLetter}
          keyClass={keyColors["B".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="N"
          click={onClickLetter}
          keyClass={keyColors["N".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="M"
          click={onClickLetter}
          keyClass={keyColors["M".charCodeAt(0) - 65] + " key"}
        />
      </div>
    </div>
  );
}

export default Keyboard;

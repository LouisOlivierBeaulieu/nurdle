import { useEffect } from "react";
import Key from "./Key";

interface Props {
  onClickKey: (value: string) => void;
  onClickEnter: () => void;
  onClickBackSpace: () => void;
  keyColors: string[];
}

function Keyboard({
  onClickEnter,
  onClickBackSpace,
  onClickKey,
  keyColors,
}: Props) {
  

  return (
    <div id="keyboard">
      <div className="row">
        <Key
          value="Q"
          click={onClickKey}
          keyClass={keyColors["Q".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="W"
          click={onClickKey}
          keyClass={keyColors["W".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="E"
          click={onClickKey}
          keyClass={keyColors["E".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="R"
          click={onClickKey}
          keyClass={keyColors["R".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="T"
          click={onClickKey}
          keyClass={keyColors["T".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="Y"
          click={onClickKey}
          keyClass={keyColors["Y".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="U"
          click={onClickKey}
          keyClass={keyColors["U".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="I"
          click={onClickKey}
          keyClass={keyColors["I".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="O"
          click={onClickKey}
          keyClass={keyColors["O".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="P"
          click={onClickKey}
          keyClass={keyColors["P".charCodeAt(0) - 65] + " key"}
        />
      </div>
      <div className="row">
        <Key
          value="A"
          click={onClickKey}
          keyClass={keyColors["A".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="S"
          click={onClickKey}
          keyClass={keyColors["S".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="D"
          click={onClickKey}
          keyClass={keyColors["D".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="F"
          click={onClickKey}
          keyClass={keyColors["F".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="G"
          click={onClickKey}
          keyClass={keyColors["G".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="H"
          click={onClickKey}
          keyClass={keyColors["H".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="J"
          click={onClickKey}
          keyClass={keyColors["J".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="K"
          click={onClickKey}
          keyClass={keyColors["K".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="L"
          click={onClickKey}
          keyClass={keyColors["L".charCodeAt(0) - 65] + " key"}
        />
      </div>
      <div className="row">
        <Key value="➜" click={onClickEnter} keyClass="enter" />
        <Key
          value="Z"
          click={onClickKey}
          keyClass={keyColors["Z".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="X"
          click={onClickKey}
          keyClass={keyColors["X".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="C"
          click={onClickKey}
          keyClass={keyColors["C".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="V"
          click={onClickKey}
          keyClass={keyColors["V".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="B"
          click={onClickKey}
          keyClass={keyColors["B".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="N"
          click={onClickKey}
          keyClass={keyColors["N".charCodeAt(0) - 65] + " key"}
        />
        <Key
          value="M"
          click={onClickKey}
          keyClass={keyColors["M".charCodeAt(0) - 65] + " key"}
        />
        <Key value="⌫" click={onClickBackSpace} keyClass="backspace" />
      </div>
    </div>
  );
}

export default Keyboard;

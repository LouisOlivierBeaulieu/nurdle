import { LANG_EN, LANG_FR } from "../constants";

interface Props {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguagePicker = ({ lang, setLang }: Props) => {
  return (
    <div className="language-picker">
      <button
        className={`lang-button ${lang === LANG_EN ? "active" : ""}`}
        onClick={() => {
          if (lang !== LANG_EN) {
            setLang(LANG_EN);
          }
        }}
      >
        English
      </button>
      <button
        className={`lang-button ${lang === LANG_FR ? "active" : ""}`}
        onClick={() => {
          if (lang !== LANG_FR) {
            setLang(LANG_FR);
          }
        }}
      >
        Français
      </button>
    </div>
  );
};

export default LanguagePicker;

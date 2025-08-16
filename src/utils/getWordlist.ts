import { fr_3 } from "../wordlists/fr_3";
import { fr_4 } from "../wordlists/fr_4";
import { fr_5 } from "../wordlists/fr_5";
import { fr_6 } from "../wordlists/fr_6";
import { en_3 } from "../wordlists/en_3";
import { en_4 } from "../wordlists/en_4";
import { en_5 } from "../wordlists/en_5";
import { en_6 } from "../wordlists/en_6";


export function getWordlist(size: number, lang: string) {
  let wordlist: string[];

  if (lang === "en") {
    switch (size) {
      case 3:
        wordlist = en_3;
        break;
      case 4:
        wordlist = en_4;
        break;
      case 5:
        wordlist = en_5;
        break;
      case 6:
        wordlist = en_6;
        break;
      default:
        wordlist = en_5;
    }
  } else {
    switch (size) {
      case 3:
        wordlist = fr_3;
        break;
      case 4:
        wordlist = fr_4;
        break;
      case 5:
        wordlist = fr_5;
        break;
      case 6:
        wordlist = fr_6;
        break;
      default:
        wordlist = fr_5;
    }
  }
  return wordlist;
}
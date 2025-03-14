import { TranslateWord } from "../models/translate";

export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=es|${targetLanguage}`);
    const data: TranslateWord = await response.json();
    return data.matches[0].translation;
  };
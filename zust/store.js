import create from "zustand";

export const useWords = create((set) => ({
  words: [],
  addWord: (word) =>
    set((state) => {
      let newWords = [...state.words, word];
      localStorage.setItem("words", JSON.stringify(newWords));
      return { words: newWords };
    }),
  setWords: (words) =>
    set((state) => {
      return { words };
    }),
  deleteWord: (word) =>
    set((state) => {
      let updatedWords = state.words.filter((item) => item !== word); //up
      localStorage.setItem("words", JSON.stringify(updatedWords));
      return { words: updatedWords };
    }),
}));

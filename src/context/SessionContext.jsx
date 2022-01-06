import React, { createContext, useReducer } from 'react';
import produce from 'immer';
import { list as words } from '../data/most-used-verbs.json';

export const SessionContext = createContext();

console.log(words);

const initialState = {
  words,
  index: 0,
  finish: words.length - 1,
  currentWord: words[0],
};

const reducer = (state, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'NEXT_WORD':
        draft.currentWord = action.payload.nextWord;
        draft.index = action.payload.nextWordIndex;
        return;
      default:
        return draft;
    }
  });
};

const SessionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { index } = state;

  const nextWord = () => {
    const nextWordIndex = index + 1 === words.length ? 0 : index + 1;
    const nextWord = nextWordIndex !== 0 ? words[nextWordIndex] : words[0];

    dispatch({
      type: 'NEXT_WORD',
      payload: {
        nextWord,
        nextWordIndex,
      },
    });
  };

  return (
    <SessionContext.Provider
      value={{
        ...state,
        nextWord,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;

import React, { useRef, useEffect, useContext } from 'react';
import * as wanakana from 'wanakana';
import {
  GameContainer,
  Main,
  WordWrapper,
  InputField,
  Word,
} from './Game.style';
import { SessionContext } from '../../context/SessionContext';

const Game = () => {
  const { nextWord, currentWord } = useContext(SessionContext) || {};
  const answerRef = useRef();

  useEffect(() => {
    answerRef.current.focus();
    wanakana.bind(answerRef.current);

    return () => {
      wanakana.unbind(answerRef.current);
    };
  }, []);

  const handleAnswer = (e) => {
    e.preventDefault();
    const userAnswer = answerRef.current.value.trim();
    const correctAnswer = currentWord.kana;

    if(userAnswer === correctAnswer) {
      nextWord();
    }

    answerRef.current.value = '';
  };

  return (
    <GameContainer>
      <Main>
        <WordWrapper>
          <Word>
            {currentWord.kana}
          </Word>
        </WordWrapper>
        <InputField>
          <form onSubmit={handleAnswer}>
            <input
              ref={answerRef}
              type="text"
              autoComplete="off"
            />
          </form>
        </InputField>
      </Main>
    </GameContainer>
  );
};

export default Game;

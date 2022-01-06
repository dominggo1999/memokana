import React, { useRef, useEffect, useContext } from 'react';
import * as wanakana from 'wanakana';
import { toHiragana } from 'wanakana';
import {
  GameContainer,
  Main,
  WordWrapper,
  InputField,
  Word,
} from './Game.style';
import { SessionContext } from '../../context/SessionContext';

const conjugationType = [
  'causative',
  'imperative',
  'nonPast',
  'nonPastPolite',
  'passive',
  'past',
  'pastPolite',
  'potential',
  'teForm',
];

const conjugationForms = [
  'affirmative',
  'negative',
];

const chooseForm = (word) => {
  const randForm = Math.ceil(Math.random() * 2);
  const rand = Math.ceil(Math.random() * conjugationType.length);

  const conjugation = conjugationType[rand - 1];
  const form = conjugation !== 'teForm' ? conjugationForms[randForm - 1] : 'affirmative';

  const choosen = word.conjugation[conjugation][form].trim().split(' ').join('');

  const conjugatedKana = toHiragana(choosen);

  return {
    kana: conjugatedKana,
  };
};

const Game = () => {
  const { nextWord, currentWord } = useContext(SessionContext) || {};
  const answerRef = useRef();
  const { kana } = chooseForm(currentWord);

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

    if(userAnswer === kana) {
      nextWord();
    }

    answerRef.current.value = '';
  };

  return (
    <GameContainer>
      <Main>
        <WordWrapper>
          <Word>
            {kana}
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

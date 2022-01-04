import React from 'react';
import Game from './layout/Game/Game';
import SessionProvider from './context/SessionContext';

const App = () => {
  return (
    <SessionProvider>
      <Game />
    </SessionProvider>
  );
};

export default App;

import React, { useState } from 'react';
import FirstScreen from './components/firstscreen';
import SecondScreen from './components/secondscreen';
import ThirdScreen from './components/thirdscreen';
import Fourthscreen from './components/fourthscreen';
import Fifthscreen from './components/fifthscreen';

import './App.scss';

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleClick = () => {
    setCurrentScreen((prevScreen) => prevScreen + 1);
  };

  return (
    <div onClick={handleClick}>
      {currentScreen === 1 && <FirstScreen />}
      {currentScreen === 2 && <SecondScreen />}
      {currentScreen === 3 && <ThirdScreen />}
      {currentScreen === 4 && <Fourthscreen />}
    </div>
  );
}

export default App;


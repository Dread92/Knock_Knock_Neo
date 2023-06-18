import "./fourthscreen.scss";
import React, { useEffect, useState } from 'react';

function FourthScreen() {
  const [typedText, setTypedText] = useState('');
  const text = 'Knock, knock, Neo.';
  let currentIndex = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(typingInterval);
        playAudio();
        return;
      }

      currentIndex++;
      setTypedText((prevText) => prevText + text[currentIndex - 1]);
    }, 100); // Adjust the typing speed by changing the interval value

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  const playAudio = () => {
    const audio = new Audio('knock.mp3'); // Replace 'path/to/audio.mp3' with the actual path to your audio file
    audio.volume = 0.5; // Adjust the volume here (0.5 represents 50% volume)

    audio.play();
  };

  return (
    <div className='main container'>
      <div className="p-one">{typedText}</div>
    </div>
  );
}

export default FourthScreen;

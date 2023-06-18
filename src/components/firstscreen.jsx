import "./firstscreen.scss"
import React, { useEffect, useState } from 'react';

function firstscreen() {
    const [typedText, setTypedText] = useState('');
    const text = 'Wake up Neo...';
    let currentIndex = 0;
  
    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex >= text.length) {
          clearInterval(typingInterval);
          return;
        }
  
        currentIndex++;
        setTypedText((prevText) => prevText + text[currentIndex - 1]);
      }, 100); // Adjust the typing speed by changing the interval value
  
      return () => {
        clearInterval(typingInterval);
      };
    }, []);
  
    return <div className='main container'><div className="p-one">{typedText}</div>
        </div>
    ;
}

export default firstscreen
import React, { useState } from 'react';

function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <button onClick={handleClick}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default ThemeButton;

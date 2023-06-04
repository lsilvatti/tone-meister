import React, { useState } from 'react';
import KeyBoard from 'components/KeyBoard/KeyBoard';

function App() {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);
  const handleKeyPressed = (key:string) => {
    setKeyPressed(key);
  }

  return (
    <div className="App">
        {keyPressed}
        <KeyBoard handleKeyPressed={(key: string) => handleKeyPressed(key)}></KeyBoard>
    </div>
  );
}

export default App;

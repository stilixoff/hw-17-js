import React from 'react';
import Timer from './Timer.jsx';

function App() {

return (
  <>
    <Timer
      time = {75000}
      steps = {1}
      autostart
      onTick

    />
    <Timer
      time = {120000}
      steps = {2}
      autostart = {false}
      onTick
    />
  </>
);
}

export default App;
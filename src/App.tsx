import React from 'react';
import logo from './logo.svg';
import './App.css';
import DebugTest from './components/Debug/DebugTest';
import PointerInteractions from './components/PointerInteractions/PointerInteractions';

function App() {
  return (
    <div className="App">
      <h2>Learn react</h2>
      {/* <DebugTest skills={["HTML", "CSS", "JS"]}/> */}
      <PointerInteractions />
    </div>
  );
}

export default App;

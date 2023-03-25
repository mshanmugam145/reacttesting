import React from 'react';
import logo from './logo.svg';
import './App.css';
import DebugTest from './components/Debug/DebugTest';

function App() {
  return (
    <div className="App">
      <h2>Learn react</h2>
      <DebugTest skills={["HTML", "CSS", "JS"]}/>
    </div>
  );
}

export default App;

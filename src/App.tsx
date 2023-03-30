// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import DebugTest from './components/Debug/DebugTest';
// import PointerInteractions from './components/PointerInteractions/PointerInteractions';
// import KeyboardInteractions from './components/KeyBoardInteractions/KeyboardInteractions';
import { AppProviders } from './providers/app-providers';
import { MuiMode } from './components/mui/mui-mode';
import Users from './components/Users/users';

function App() {
  return (
    <AppProviders>
    <div className="App">
      <h2>Learn react</h2>
      {/* <DebugTest skills={["HTML", "CSS", "JS"]}/> */}
      {/* <PointerInteractions /> */}
      {/* <KeyboardInteractions /> */}
      {/* <MuiMode /> */}
      <Users />
    </div>
    </AppProviders>
  );
}

export default App;

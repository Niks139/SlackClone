import React from 'react'
import Header from './components/Header'
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">

      <h1>Slack Clone</h1>

      {/* Header  */}
      <Header />

      <div className="app__body"> 
        <Sidebar />
      </div>
      {/* Sidebar  */}
      {/* React Router -> Chat Screen  */}
    </div>
  );
}

export default App;

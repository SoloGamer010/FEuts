import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;